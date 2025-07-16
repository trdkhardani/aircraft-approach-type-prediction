
import json
import re
import pandas as pd
import math
import os
import fractions

# Load ATIS JSON data
page = input("Page: ")
with open(f"./atis_json/atis_page{page}.json", "r") as f:
    atis_data = json.load(f)["airport_info"]
    
rows = []

for entry in atis_data:
    atis_id = entry["atis_id"]
    airport = entry["airport"]
    atis_text = entry["atis"].upper()

    # Split ATIS text into sentences
    sentences = re.split(r'[.!?]', atis_text)
    approach_sentence = sentences[2] if len(sentences) > 2 else ""

    # Extract active approach runways only from the 3rd sentence
    runway_matches = re.findall(r"(?:ILS|RNAV|RNP)?\s*(\d{2}[LRC]?)", approach_sentence)
    approach_runways = sorted(set(runway_matches))


    # Extract weather components
    wind_match = re.search(r"(VRB|\d{3})(\d{2,3})G?(\d{2,3})?KT", atis_text)
    wind_dir = -1 if wind_match and wind_match.group(1) == "VRB" else (int(wind_match.group(1)) if wind_match else None)
    wind_speed = int(wind_match.group(2)) if wind_match else None
    wind_gust = int(wind_match.group(3)) if wind_match and wind_match.group(3) else 0

    visibility = None
    # Match patterns like "1 1/8SM", "3/4SM", or "2SM"
    vis_match = re.search(r'((?:\d+\s+)?\d+/\d+|\d+)\s*SM', atis_text)
    if vis_match:
        vis_str = vis_match.group(1).strip()
        try:
            # Handle mixed numbers like "1 1/8"
            if ' ' in vis_str:
                parts = vis_str.split()
                visibility = float(parts[0]) + float(fractions.Fraction(parts[1]))
            elif '/' in vis_str:
                visibility = float(fractions.Fraction(vis_str))
            else:
                visibility = float(vis_str)
        except Exception as e:
            visibility = None

    ceiling = 99999 # default if no BKN/OVC/VV clouds
    cloud_match = re.search(r"(BKN|OVC|VV)(\d{3})", atis_text)
    if cloud_match:
        ceiling = int(cloud_match.group(2)) * 100

    # Weather phenomena: between SM and clouds (FEW/SCT/BKN/OVC/VV/etc)
    wx_match = re.search(r"SM\s+([A-Z+\- ]+?)(?=(?:FEW|SCT|BKN|OVC|VV|CB|TCU|NSC|SKC|CLR|NCD\d{2}/\d{2}|A\d{4}|Q\d{4}|$))", atis_text)
    wx_phenomena = wx_match.group(1).strip() if wx_match else "N/A"

    # Determine approach type flags
    has_ils = "ILS" in approach_sentence
    has_rnp = "RNP" in approach_sentence
    has_rnav = ("RNAV GPS" in approach_sentence) or ("RNAV" in approach_sentence and not has_rnp)
    has_visual = ("VISUAL" in approach_sentence) or ("VIS" in approach_sentence) or ("VA" in approach_sentence)
    has_inst_apchs = "INST APCHS" in approach_sentence
    if has_inst_apchs and has_visual:
        has_ils = has_rnav = has_rnp = has_visual = 1
    elif has_inst_apchs:
        has_ils = has_rnav = has_rnp = 1

    if "CAT III" in atis_text:
        ils_cat = "CAT III"
    elif "CAT II" in atis_text:
        ils_cat = "CAT II"
    elif "CAT I" in atis_text:
        ils_cat = "CAT I"
    elif has_ils:
        ils_cat = "No Category"
    else:
        ils_cat = "No ILS"

    rvr_info = entry.get("rvr_info", [])
    for rvr_entry in rvr_info:
        rwy_code = re.sub(r"\\s+", "", rvr_entry["runway_code"].strip().upper())
        if rwy_code not in approach_runways:
            continue  # Skip runways not in the 3rd sentence

        match = re.match(r"(\d{1,2})([LRC]?)", rwy_code)
        if not match:
            continue

        runway_number = int(match.group(1))
        runway_side = match.group(2)
        rvr = rvr_entry["rvr"].strip()

        angle_diff = math.radians((wind_dir - runway_number * 10) % 360) if wind_dir is not None else 0
        headwind = round(wind_speed * math.cos(angle_diff), 1) if wind_speed is not None else None
        crosswind = round(wind_speed * math.sin(angle_diff), 1) if wind_speed is not None else None

        rows.append({
            "atis_id": atis_id,
            "airport_icao": airport,
            "visibility": visibility,
            "wind_speed": wind_speed,
            "wind_gust": wind_gust,
            "wind_direction": wind_dir,
            "rvr": rvr,
            "runway_designator_number": runway_number,
            "runway_designator_side": runway_side,
            "runway_ils_category": ils_cat,
            "headwind": headwind,
            "crosswind": crosswind,
            "ceiling": ceiling,
            "weather_phenomenon": wx_phenomena,
            "ILS": int(has_ils) or int(has_inst_apchs),
            "RNAV": int(has_rnav) or int(has_inst_apchs),
            "RNP": int(has_rnp) or int(has_inst_apchs),
            "VISUAL": int(has_visual) or int(has_inst_apchs)
        })

df = pd.DataFrame(rows)
df.drop_duplicates(inplace=True)

csv_path = "atis_dataset_converted_update_1.csv"

if os.path.exists(csv_path):
    # Read the existing CSV (with the correct delimiter!)
    df_existing = pd.read_csv(csv_path, sep=";")
    # Concatenate and drop duplicates
    df = pd.concat([df_existing, df], ignore_index=True).drop_duplicates()
    # Save back (without index)
    df.to_csv(csv_path, index=False, sep=";")
else:
    # First time: just save
    df.to_csv(csv_path, index=False, sep=";")

print(f"atis_page{page}.json appended to {csv_path}")