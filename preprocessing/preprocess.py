import requests
import pandas as pd
import re
import math
from metar import Metar  # the Python metar package

# Calculate wind components relative to a runway heading (in degrees)
# Assumes runway heading = runway number * 10 (e.g., runway "19" -> 190°)
def calculate_wind_components(wind_speed, wind_dir, runway_heading):
    angle_diff = abs(runway_heading - wind_dir)
    if angle_diff > 180:
        angle_diff = 360 - angle_diff
    rad = math.radians(angle_diff)
    headwind = wind_speed * math.cos(rad)
    crosswind = abs(wind_speed * math.sin(rad))
    return {"headwind": round(headwind, 1), "crosswind": round(crosswind, 1)}

# Extract a 4-digit timestamp (e.g. "0952Z") from text.
def extract_timestamp(text):
    m = re.search(r"(\d{4}Z)", text)
    return m.group(1) if m else ""

# Extract the METAR portion from the ATIS text.
# Assumes the METAR is the second sentence (split by periods).
def extract_metar_part(atis_text):
    parts = [p.strip() for p in atis_text.split('.') if p.strip()]
    return parts[1] if len(parts) >= 2 else ""

# Extract the runway instruction sentence.
# Splits the ATIS text into sentences and selects the first one that contains any variant
# of "APP", "APCH", "APCHS", or "APPROACH" (case-insensitive).
# If the sentence contains "DEPG" or "DEPS", truncates before that marker.
def extract_runway_instruction(atis_text):
    sentences = [s.strip() for s in atis_text.split('.') if s.strip()]
    candidate = next((s for s in sentences if re.search(r"(?:APPROACH|APCHS|APCH|APP)", s, re.IGNORECASE)), "")
    if not candidate:
        return ""
    upper_candidate = candidate.upper()
    m = re.search(r"DEP[GS]", upper_candidate)
    return candidate[:m.start()].strip() if m else candidate

# Parse the runway instruction sentence to extract approach types and runway designators.
# Uses three regex strategies:
#   1. Capture runway codes following "APCHS"
#   2. Capture runway codes following "RWY" or "RY"
#   3. Capture runway codes immediately following an approach token (e.g., "VIS 26R")
# Also extracts all known approach types (ILS, RNAV, RNP, VISUAL, VA, VIS) and normalizes
# "VA" and "VIS" to "VISUAL".
def parse_runway_instruction(instruction_text):
    # Extract approach types (normalize VA/VIS to VISUAL)
    approach_tokens = re.findall(r"\b(ILS|RNAV|RNP|VISUAL|VA|VIS)\b", instruction_text, re.IGNORECASE)
    unique_approaches = set()
    for token in approach_tokens:
        token = token.upper()
        if token in ['VA', 'VIS']:
            unique_approaches.add('VISUAL')
        else:
            unique_approaches.add(token)
    approach_types = ",".join(unique_approaches)
    
    runway_codes_set = set()
    
    # Regex 1: Look for "APCHS" followed by a runway code.
    for match in re.finditer(r"APCHS\s+([0-9]{1,2}[A-Z]?)", instruction_text, re.IGNORECASE):
        runway_codes_set.add(match.group(1).strip())
    
    # Regex 2: Capture runway designators following "RWY" or "RY".
    for match in re.finditer(r"R(?:WY|Y)\s*([0-9]{1,2}[A-Z]?)", instruction_text, re.IGNORECASE):
        runway_codes_set.add(match.group(1).strip())
    
    # Regex 3: Capture runway designators immediately following an approach token.
    for match in re.finditer(r"(?:VIS(?:UAL)?|ILS|RNAV|RNP)\s*([0-9]{1,2}[A-Z]?)", instruction_text, re.IGNORECASE):
        runway_codes_set.add(match.group(1).strip())
    
    return {"availableApproachTypes": approach_types, "runwayCodes": list(runway_codes_set)}

# Parse a runway code (e.g., "19L" or "6R") into numeric designator and side.
def parse_runway_code(runway_code):
    m = re.match(r"(\d{1,2})([A-Z]?)", runway_code)
    if m:
        num = m.group(1)
        if len(num) == 1:
            num = "0" + num
        side = m.group(2) or ""
        return {"runway_designator_number": int(num), "runway_designator_side": side}
    return {"runway_designator_number": None, "runway_designator_side": ""}

# Find the RVR value (as a number) for a given runway code in the rvr_info array.
def get_rvr_for_runway(rvr_info, runway_code):
    parsed = parse_runway_code(runway_code)
    if parsed["runway_designator_number"] is None:
        return None
    normalized = f"{parsed['runway_designator_number']:02d}{parsed['runway_designator_side']}"
    for info in rvr_info:
        code = info["runway_code"].strip()
        if code == normalized:
            rvr_str = re.sub(r"[^\d.]", "", info["rvr"])
            try:
                return float(rvr_str)
            except:
                return None
    return None

# Main processing function.
def process_atis_data():
    # Set limit=1 to process one airport info record (adjust as needed)
    url = "http://34.101.156.246:3000/api/atis?page=1&limit=1"
    response = requests.get(url)
    data = response.json()
    records = []
    
    for airport_data in data["airport_info"]:
        airport_icao = airport_data["airport"]
        atis_text = airport_data["atis"]
        atis_time = extract_timestamp(atis_text) or airport_data["atis_added_at"]["formatted"].split(" ")[3]
        metar_part = extract_metar_part(atis_text)
        full_metar = f"{airport_icao} {atis_time} {metar_part}"
        
        # Decode the METAR using the Python metar library.
        try:
            m = Metar.Metar(full_metar)
        except Exception as e:
            print(f"Error parsing METAR for {airport_icao}: {e}")
            continue
        
        # In the python-metar package, visibility is available as m.vis
        visibility = m.vis if hasattr(m, "vis") else None
        wind_speed = m.wind_speed if hasattr(m, "wind_speed") and m.wind_speed is not None else 0
        wind_dir = m.wind_dir if hasattr(m, "wind_dir") and m.wind_dir is not None else 0
        
        # Determine ceiling by iterating through cloud layers (if available).
        ceiling = 0
        if hasattr(m, "clouds") and m.clouds:
            # Each cloud object typically has an attribute 'abbr' and 'altitude'
            for cloud in m.clouds:
                if hasattr(cloud, "abbr") and re.match(r"^(BKN|OVC|VV)", cloud.abbr, re.IGNORECASE):
                    ceiling = cloud.altitude
                    break
        
        runway_instruction = extract_runway_instruction(atis_text)
        parsed_instr = parse_runway_instruction(runway_instruction)
        approach_type = parsed_instr["availableApproachTypes"]
        runway_codes = parsed_instr["runwayCodes"]
        ils_category = "CAT III" if "ILS" in approach_type.split(",") else "No ILS"
        
        for rw in runway_codes:
            if not rw:
                continue
            parsed_rw = parse_runway_code(rw)
            rvr = get_rvr_for_runway(airport_data["rvr_info"], rw) or ""
            runway_heading = parsed_rw["runway_designator_number"] * 10 if parsed_rw["runway_designator_number"] is not None else None
            wind_components = calculate_wind_components(wind_speed, wind_dir, runway_heading) if runway_heading is not None else {"headwind": None, "crosswind": None}
            
            record = {
                "airport_icao": airport_icao,
                "visibility": visibility,
                "rvr": rvr,
                "runway_designator_number": parsed_rw["runway_designator_number"],
                "runway_designator_side": parsed_rw["runway_designator_side"],
                "runway_ils_category": ils_category,
                "headwind": wind_components["headwind"],
                "crosswind": wind_components["crosswind"],
                "ceiling": ceiling,
                "approach_type": approach_type
            }
            records.append(record)
    
    df = pd.DataFrame(records)
    df.to_csv("atis_dataset.csv", index=False, sep=";")
    print("CSV written to atis_dataset.csv")

if __name__ == "__main__":
    process_atis_data()
