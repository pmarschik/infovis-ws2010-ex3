import json
import csv

f = open('alldata.csv','r')
reader = csv.reader(f)
out = []
skip_header = False

def safeFloat(s):
    try:
        return float(s)
    except ValueError:
        return float("-1")

for row in reader:
    if not skip_header:
        skip_header = True
        continue

    country = row[0]
    year = row[1]
    total = row[2]
    urban = row[3]
    rural = row[4]
    urban_water_improved = row[5]
    urban_water_piped = row[6]
    urban_water_otherimproved = row[7]
    urban_water_unimproved = row[8]
    rural_water_improved = row[9]
    rural_water_piped = row[10]
    rural_water_otherimproved = row[11]
    rural_water_unimproved = row[12]
    total_water_improved = row[13]
    total_water_piped = row[14]
    total_water_otherimproved = row[15]
    total_water_unimproved = row[16]
    urban_sanitation_improved = row[17]
    urban_sanitation_shared = row[18]
    urban_sanitation_opendefecation = row[19]
    urban_sanitation_otherunimproved = row[20]
    urban_sanitation_unimproved = row[21]
    rural_sanitation_improved = row[22]
    rural_sanitation_shared = row[23]
    rural_sanitation_opendefecation = row[24]
    rural_sanitation_otherunimproved = row[25]
    rural_sanitation_unimproved = row[26]
    total_sanitation_improved = row[27]
    total_sanitation_shared = row[28]
    total_sanitation_opendefecation = row[29]
    total_sanitation_otherunimproved = row[30]
    total_sanitation_unimproved = row[31]

    out += [{
        "country": country,
        "year": int(year),
        "total_population": safeFloat(total),
        "urban_population": safeFloat(urban),
        "rural_population": safeFloat(rural),
        "water": {
            "urban": {
                "improved": {
                    "total": safeFloat(urban_water_improved),
                    "piped": safeFloat(urban_water_piped),
                    "other": safeFloat(urban_water_otherimproved),
                },
                "unimproved": safeFloat(urban_water_unimproved)
            },
            "rural": {
                "improved": {
                    "total": safeFloat(rural_water_improved),
                    "piped": safeFloat(rural_water_piped),
                    "other": safeFloat(rural_water_otherimproved),
                },
                "unimproved": safeFloat(rural_water_unimproved)
            },
            "total": {
                "improved": {
                    "total": safeFloat(total_water_improved),
                    "piped": safeFloat(total_water_piped),
                    "other": safeFloat(total_water_otherimproved)
                },
                "unimproved": safeFloat(total_water_unimproved)
            }
        },
        "sanitation": {
            "urban": {
                "improved": safeFloat(urban_sanitation_improved),
                "unimproved": {
                    "shared": safeFloat(urban_sanitation_shared),
                    "open_defecation": safeFloat(urban_sanitation_opendefecation),
                    "other": safeFloat(urban_sanitation_otherunimproved),
                    "total": safeFloat(urban_sanitation_unimproved)
                }
            },
            "rural": {
                "improved": safeFloat(rural_sanitation_improved),
                "unimproved": {
                    "shared": safeFloat(rural_sanitation_shared),
                    "open_defecation": safeFloat(rural_sanitation_opendefecation),
                    "other": safeFloat(rural_sanitation_otherunimproved),
                    "total": safeFloat(rural_sanitation_unimproved)
                }
            },
            "total": {
                "improved": safeFloat(total_sanitation_improved),
                "unimproved": {
                    "shared": safeFloat(total_sanitation_shared),
                    "open_defecation": safeFloat(total_sanitation_opendefecation),
                    "other": safeFloat(total_sanitation_otherunimproved),
                    "total": safeFloat(total_sanitation_unimproved)
                }
            }
        }
    }]

f.close()

print "var data = " + json.dumps(out, indent=2)

