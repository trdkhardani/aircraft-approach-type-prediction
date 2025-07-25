import re

# atis_text = "ORD ATIS INFO Z 1751Z. 31004KT 10SM FEW065 03/M12 A3017 (THREE ZERO ONE SEVEN) RMK AO2 SLP224 T00331122 10044 21033 58009. ARR EXP VECTORS ILS RWY 27C APCH, ILS RWY 27R APCH, ILS RWY 28C APCH. SIMUL APCHS IN USE. LAND AND HOLD SHORT OPERATIONS ARE IN EFFECT. RWY 27C ARR PLAN TO H/S OF TWY V V, 9 THSD 7 HND 25 FT AVBL, RWY 28C ARR PLAN TO H/S OF TWY Z, 9 THSD 6 HND TEN FT AVBL. DEPS EXP RWYS 22L 28R FROM NOVEMBER 5 9750 FT AVL. RWY 4L, 22R CLSD. TWY B CLSD BTN TWY, TT AND TWY V1 ;, TWY A14 CLSD;. RWY 9L IM OTS, RWY 9C IM OTS, RWY 10L IM OTS, RWY 28R IM OTS. PILOTS USE CTN FOR BIRD ACTIVITY IN THE VICINITY OF THE ARPT. USE CTN FOR PERSONNEL AND EQUIP AT NUMEROUS SITES ON THE FIELD. PILOTS UTLIZING JEPPESON APPROACH PLATES AND AIRPORT DIAGRAMS, PLEASE BE ADVISED THAT THE MOST RECENT CHART ISSUE WAS PUBLISHED WITH AN ERROR SHOWING THAT PAPIS ARE INSTALLED AND FUNCTIONAL FOR RWYS 9L AND 27R. RWYS 9L AND 27R DO NOT HAVE PAPIS. LIGHT RIME ICE IN THE VACINITY. READBACK ALL RWY HOLD SHORT INSTRUCTIONS. WHEN READY TO TAXI CONTACT GND METERING ON FREQ 121.67. ...ADVS YOU HAVE INFO Z."
atis_text = "JFK ATIS INFO D 2251Z. 34013KT 10SM FEW250 23/01 A2999 (TWO NINER NINER NINER) RMK AO2 SLP154 T02280011. APPROACH IN USE ILS RY 31R, VISUAL APCH RY 31L. DEPG RY 31L. NOTAMS, . RWY 4R/22L INNER MARKER OTS. LOW LEVEL WIND SHEAR ADZYS IN EFFECT. BIRD ACTIVITY VICINITY ARPT. NUM CRANES OPERATING AT JFK. READBACK ALL RWY ASSIGNMENTS AND HOLD SHORT INSTRUCTIONS. ...ADVS YOU HAVE INFO D."

# Split ATIS text into sentences
sentences = re.split(r'[.!?]', atis_text)
approach_sentence = sentences[2] if len(sentences) > 2 else ""

# Extract active approach runways only from the 3rd sentence
runway_matches = re.findall(r"(?:ILS|RNAV|RNP)?\s*(\d{2}[LRC]?)", approach_sentence)
approach_runways = sorted(set(runway_matches))

# Determine approach type flags
has_ils = "ILS" in approach_sentence
has_rnp = "RNP" in approach_sentence
has_rnav = ("RNAV GPS" in approach_sentence) or ("RNAV" in approach_sentence and not has_rnp)
has_visual = ("VISUAL" in approach_sentence) or ("VIS" in approach_sentence) or ("VA" in approach_sentence)

print(f"atis_text has ILS: {has_ils}")
print(f"atis_text has RNP: {has_rnp}")
print(f"atis_text has RNAV: {has_rnav}")
print(f"atis_text has Visual: {has_visual}")