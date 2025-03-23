// preprocess.js
// This script fetches ATIS/RVR data from the API using axios and converts it to CSV.
// CSV fields:
// airport_icao; visibility; rvr; runway_designator_number; runway_designator_side;
// runway_ils_category; headwind; crosswind; ceiling; ILS; RNAV; RNP; VISUAL
//
// NOTE:
//   - The METAR library is imported as: 
//         const parseMETAR = require('metar');
//   - The CSV output is appended to a file named 'atis_dataset_multilabel.csv'.
//   - processAtisData accepts a page parameter, and we call it every 1 second.

const axios = require('axios');
const parseMETAR = require('metar'); // parseMETAR is a variable name
const fs = require('fs');

// Revised helper function to convert unusual visibility strings into a decimal value.
// It handles formats like "M1/4SM", "1/4SM", or "1 1/2SM" (where "M" indicates "less than").
function parseVisibilityValue(visStr) {
  if (!visStr) return null;

  // Convert to uppercase, remove "SM", and trim whitespace
  visStr = visStr.toUpperCase().replace("SM", "").trim();

  // Remove leading "M" (if present) which means "less than"
  const isLessThan = visStr.startsWith("M");
  if (isLessThan) {
    visStr = visStr.slice(1).trim();
  }

  // Regex pattern to capture whole number + fraction, or just a fraction
  const match = visStr.match(/^(\d+)?\s*(\d+\/\d+)?$/);
  
  if (match) {
    const whole = match[1] ? parseFloat(match[1]) : 0; // Whole number (if exists)
    let fraction = 0;

    if (match[2]) {
      const [num, den] = match[2].split("/").map(Number);
      if (den !== 0) {
        fraction = num / den;
      }
    }
    return whole + fraction;
  }

  // If it's just a single number, return as float
  const value = parseFloat(visStr);
  return isNaN(value) ? null : value;
}

// Calculate wind components relative to runway heading (in degrees)
// Assumes runway heading = runway number * 10 (e.g., runway "19" -> 190°)
function calculateWindComponents(windSpeed, windDir, runwayHeading) {
  let angleDiff = Math.abs(runwayHeading - windDir);
  if (angleDiff > 180) angleDiff = 360 - angleDiff;
  const rad = angleDiff * (Math.PI / 180);
  const headwind = windSpeed * Math.cos(rad);
  const crosswind = Math.abs(windSpeed * Math.sin(rad));
  return { headwind: Number(headwind.toFixed(1)), crosswind: Number(crosswind.toFixed(1)) };
}

// Extract a 4-digit timestamp (e.g., "0952Z") from text.
function extractTimestamp(text) {
  const match = text.match(/(\d{4}Z)/);
  return match ? match[1] : '';
}

// Extract the METAR portion from the ATIS text.
// Assumes the METAR is the second sentence (split by periods).
function extractMetarPart(atisText) {
  const parts = atisText.split('.').map(s => s.trim()).filter(Boolean);
  return parts.length >= 2 ? parts[1] : '';
}

// Extract the runway instruction sentence.
// Splits the text into sentences and selects the first that contains a variant of 
// "APP", "APCH", "APCHS", or "APPROACH" (case-insensitive).
// If the sentence contains "DEPG" or "DEPS", it is truncated before that marker.
function extractRunwayInstruction(atisText) {
  const sentences = atisText.split('.').map(s => s.trim());
  const candidate = sentences.find(sentence =>
    /(?:APPROACH|APCHS|APCH|APP)/i.test(sentence)
  );
  if (!candidate) return "";
  const upperCandidate = candidate.toUpperCase();
  const endIdx = upperCandidate.search(/DEP[GS]/);
  return endIdx !== -1 ? candidate.substring(0, endIdx).trim() : candidate;
}

// Parse the runway instruction sentence to extract approach types and runway designators.
// Uses three regex strategies:
//   1. Capture runway codes following "APCHS".
//   2. Capture runway codes following "RWY" or "RY".
//   3. Capture runway designators immediately following an approach token (e.g., "VIS 26R").
// Also extracts known approach types (ILS, RNAV, RNP, VISUAL, VA, VIS) and normalizes VA/VIS to VISUAL.
function parseRunwayInstruction(instructionText) {
  const approachRegex = /\b(ILS|RNAV|RNP|VISUAL|VA|VIS)\b/gi;
  let approachMatches = instructionText.match(approachRegex);
  let uniqueApproaches = [];
  if (approachMatches) {
    uniqueApproaches = [...new Set(approachMatches.map(m => {
      let token = m.toUpperCase();
      return (token === 'VA' || token === 'VIS') ? 'VISUAL' : token;
    }))];
  }
  
  const runwayCodesSet = new Set();
  
  // Regex 1: Look for "APCHS" followed by runway code.
  const apchsRegex = /APCHS\s+([0-9]{1,2}[A-Z]?)/gi;
  let match;
  while ((match = apchsRegex.exec(instructionText)) !== null) {
    runwayCodesSet.add(match[1].trim());
  }
  
  // Regex 2: Capture runway designators following "RWY" or "RY".
  const rwyRegex = /R(?:WY|Y)\s*([0-9]{1,2}[A-Z]?)/gi;
  while ((match = rwyRegex.exec(instructionText)) !== null) {
    runwayCodesSet.add(match[1].trim());
  }
  
  // Regex 3: Capture runway designators immediately following an approach token.
  const approachRunwayRegex = /(?:VIS(?:UAL)?|ILS|RNAV|RNP)\s*([0-9]{1,2}[A-Z]?)/gi;
  while ((match = approachRunwayRegex.exec(instructionText)) !== null) {
    runwayCodesSet.add(match[1].trim());
  }
  
  return {
    availableApproachTypes: uniqueApproaches.join(','),
    runwayCodes: Array.from(runwayCodesSet)
  };
}

// Given a runway code (e.g., "19L" or "6R"), parse it into a numeric designator and side.
function parseRunwayCode(runwayCode) {
  const match = runwayCode.match(/(\d{1,2})([A-Z]?)/);
  if (match) {
    let number = match[1];
    if (number.length === 1) number = '0' + number;
    const side = match[2] || '';
    return { runway_designator_number: Number(number), runway_designator_side: side };
  }
  return { runway_designator_number: null, runway_designator_side: '' };
}

// Find the RVR value (as a number) for a given runway code in the rvr_info array.
function getRvrForRunway(rvrInfo, runwayCode) {
  const parsed = parseRunwayCode(runwayCode);
  if (parsed.runway_designator_number === null) return null;
  const normalized = parsed.runway_designator_number.toString().padStart(2, '0') + parsed.runway_designator_side;
  for (let info of rvrInfo) {
    const code = info.runway_code.trim();
    if (code === normalized) {
      // const rvrNum = parseFloat(info.rvr.replace(/[^\d.]/g, ''));
      // return rvrNum;
      return info.rvr; // Keep the original datatype as is
    }
  }
  return null;
}

// Main function to fetch and process ATIS data.
async function processAtisData(page) {
  try {
    const limit = 1; // Set desired limit per page
    const response = await axios.get(`http://34.128.70.61:3000/api/atis?page=${page}&limit=${limit}`);
    const data = response.data;
    const csvRows = [];
    // On first page, add header with multilabel columns.
    if (page === 1) {
      csvRows.push([
        "airport_icao",
        "visibility",
        "wind_speed",
        "wind_direction",
        "rvr",
        "runway_designator_number",
        "runway_designator_side",
        "runway_ils_category",
        "headwind",
        "crosswind",
        "ceiling",
        "weather_phenomenon",
        "ILS",
        "RNAV",
        "RNP",
        "VISUAL"
      ].join(';'));
    }

    // Process each airport entry.
    for (let airportData of data.airport_info) {
      const airportIcao = airportData.airport;
      const atisText = airportData.atis;
      const atisTime = extractTimestamp(atisText) || airportData.atis_added_at.formatted.split(' ')[3];
      const metarPart = extractMetarPart(atisText);
      const fullMetar = `${airportIcao} ${atisTime} ${metarPart}`;

      // Decode METAR using the metar library.
      const decoded = parseMETAR(fullMetar);

      // Extract weather phenomenon codes (abbreviations only)
      let weatherPhenomenon = "N/A"; // Default if no weather present
      if (decoded.weather && decoded.weather.length > 0) {
        weatherPhenomenon = decoded.weather.map(w => w.abbreviation).join(" ");
      }
      
      // Attempt to obtain visibility from decoded METAR.
      let visibility = decoded.visibility;
      if (isNaN(visibility)) {
        // Use a regex with a positive lookahead to capture only the numeric/fraction part before "SM".
        const visMatch = atisText.match(/M?\d+\s*\d*\/?\d*(?=SM)/i);
        if (visMatch) {
          visibility = parseVisibilityValue(visMatch[0]); // <-- Use [0] instead of [1]
        } else {
          visibility = "";
        }
      }

      // Handle wind. If wind direction is "VRB" or non-numeric, set to 0.
      let windSpeed = decoded.wind ? decoded.wind.speed : 0;
      let windDir = 0;

      if (decoded.wind && decoded.wind.direction) {
        let wd = decoded.wind.direction.toString().toUpperCase();

        if (wd.includes("VRB")) {
          windDir = -1;  // Variable wind = -1
        } else if (wd.includes("CALM")) {
          windDir = 0;   // Calm wind = 0
        } else {
          windDir = parseFloat(wd);
          if (isNaN(windDir)) windDir = 0; // Fallback to 0 if it's still invalid
        }
      }


      let ceiling = -1; // -1 as default if no BKN, OVC, or VV cloud
      if (decoded.clouds && decoded.clouds.length > 0) {
        for (let cloud of decoded.clouds) {
          if (/^(BKN|OVC|VV)/i.test(cloud.abbreviation)) {
            ceiling = cloud.altitude;
            break;
          }
        }
      }

      const runwayInstruction = extractRunwayInstruction(atisText);
      const { availableApproachTypes, runwayCodes } = parseRunwayInstruction(runwayInstruction);
      
      // Determine ILS category.
      const ilsCategory = availableApproachTypes.split(',').includes('ILS') ? "CAT III" : "No ILS";
      
      // Convert availableApproachTypes into multilabel columns.
      const tokens = availableApproachTypes ? availableApproachTypes.split(',') : [];
      const ils = tokens.includes("ILS") ? 1 : 0;
      const rnav = tokens.includes("RNAV") ? 1 : 0;
      const rnp = tokens.includes("RNP") ? 1 : 0;
      const visual = tokens.includes("VISUAL") ? 1 : 0;

      // Create a CSV row for each runway code extracted.
      for (let rwCode of runwayCodes) {
        if (!rwCode) continue;
        const { runway_designator_number, runway_designator_side } = parseRunwayCode(rwCode);
        const rvr = getRvrForRunway(airportData.rvr_info, rwCode) || '';
        const runwayHeading = runway_designator_number * 10;
        let headwind = 0, crosswind = 0;

        // Only calculate wind components if wind direction is NOT VRB (-1)
        if (windDir !== -1) {
          ({ headwind, crosswind } = calculateWindComponents(windSpeed, windDir, runwayHeading));
        }

        const row = [
          airportIcao,
          visibility,
          windSpeed,
          windDir,
          rvr,
          runway_designator_number,
          runway_designator_side,
          ilsCategory,
          headwind,
          crosswind,
          ceiling,
          weatherPhenomenon,
          ils,
          rnav,
          rnp,
          visual
        ];        
        csvRows.push(row.join(';'));
      }
    }

    // Append the rows to the CSV file.
    fs.appendFileSync('atis_dataset.csv', csvRows.join('\n') + "\n");
    console.log(`Page ${page} processed.`);
  } catch (error) {
    console.error('Error processing ATIS data for page', page, error);
  }
}

// Process pages at an interval of 1 second.
const maxPages = 3749; // set maximum pages to process
// let currentPage = 1;
// let currentPage = 31;
// let currentPage = 170;
let currentPage = 1;
const intervalId = setInterval(async () => {
  await processAtisData(currentPage);
  currentPage++;
  if (currentPage > maxPages) {
    clearInterval(intervalId);
    console.log('All pages processed.');
  }
}, 500);
