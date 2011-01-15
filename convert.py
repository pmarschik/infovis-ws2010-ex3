import json
import csv

f=open('countries.txt')
continent_map = { 'AF': "Africa", 'AS': "Asia", 'EU': "Europe", 'NA': "North America", 'SA': "South America",
                  'OC': "Oceania", 'AN': "Antarctica" }
continents = {}

for line in f:
    continent = continent_map[line[:2]]
    country = line[14:]
    offset = country.find(',')
    if offset >= 0: country = country[:offset]
    offset = country.find('\n')
    if offset >= 0: country = country[:offset]

    if not continents.has_key(continent): continents[continent] = []

    continents[continent].append(country)


f.close()

f = open('alldata.csv','r')
reader = csv.reader(f)
out = {}
skip_header = False

def safe_float(s):
    try:
        return float(s)
    except ValueError:
        return -1.0

def continent_for_country(country):
    for continent, ctrys in continents.items():
        for ctry in ctrys:
            if ctry == country:
                return continent
    return None

cur_country = None
last_country = None
                                                
for row in reader:
    if not skip_header:
        skip_header = True
        continue

    country = row[0]
    year = safe_float(row[1])
    total = safe_float(row[2])
    urban = safe_float(row[3])
    rural = safe_float(row[4])
    urban_water_improved = safe_float(row[5])
    urban_water_piped = safe_float(row[6])
    urban_water_otherimproved = safe_float(row[7])
    urban_water_unimproved = safe_float(row[8])
    rural_water_improved = safe_float(row[9])
    rural_water_piped = safe_float(row[10])
    rural_water_otherimproved = safe_float(row[11])
    rural_water_unimproved = safe_float(row[12])
    total_water_improved = safe_float(row[13])
    total_water_piped = safe_float(row[14])
    total_water_otherimproved = safe_float(row[15])
    total_water_unimproved = safe_float(row[16])
    urban_sanitation_improved = safe_float(row[17])
    urban_sanitation_shared = safe_float(row[18])
    urban_sanitation_opendefecation = safe_float(row[19])
    urban_sanitation_otherunimproved = safe_float(row[20])
    urban_sanitation_unimproved = safe_float(row[21])
    rural_sanitation_improved = safe_float(row[22])
    rural_sanitation_shared = safe_float(row[23])
    rural_sanitation_opendefecation = safe_float(row[24])
    rural_sanitation_otherunimproved = safe_float(row[25])
    rural_sanitation_unimproved = safe_float(row[26])
    total_sanitation_improved = safe_float(row[27])
    total_sanitation_shared = safe_float(row[28])
    total_sanitation_opendefecation = safe_float(row[29])
    total_sanitation_otherunimproved = safe_float(row[30])
    total_sanitation_unimproved = safe_float(row[31])
    continent = continent_for_country(country)
                
    if country == "Total" or continent == None: continue

    if country != last_country:
        if cur_country != None:
            out[last_country] = cur_country
        last_country = country
        cur_country = {
            "continent": continent,
            "population_total": [-1, -1, -1, -1, -1],
            "population_urban": [-1, -1, -1, -1, -1],
            "population_rural": [-1, -1, -1, -1, -1],
            "water_urban_improved_total": [-1, -1, -1, -1, -1],
            "water_urban_improved_piped": [-1, -1, -1, -1, -1],
            "water_urban_improved_other": [-1, -1, -1, -1, -1],
            "water_urban_unimproved": [-1, -1, -1, -1, -1],
            "water_rural_improved_total": [-1, -1, -1, -1, -1],
            "water_rural_improved_piped": [-1, -1, -1, -1, -1],
            "water_rural_improved_other": [-1, -1, -1, -1, -1],
            "water_rural_unimproved": [-1, -1, -1, -1, -1],
            "water_total_improved_total": [-1, -1, -1, -1, -1],
            "water_total_improved_piped": [-1, -1, -1, -1, -1],
            "water_total_improved_other": [-1, -1, -1, -1, -1],
            "water_total_unimproved": [-1, -1, -1, -1, -1],
            "sanitation_urban_improved": [-1, -1, -1, -1, -1],
            "sanitation_urban_unimproved_shared": [-1, -1, -1, -1, -1],
            "sanitation_urban_unimproved_opendefecation": [-1, -1, -1, -1, -1],
            "sanitation_urban_unimproved_other": [-1, -1, -1, -1, -1],
            "sanitation_urban_unimproved_total": [-1, -1, -1, -1, -1],
            "sanitation_rural_improved": [-1, -1, -1, -1, -1],
            "sanitation_rural_unimproved_shared": [-1, -1, -1, -1, -1],
            "sanitation_rural_unimproved_opendefecation": [-1, -1, -1, -1, -1],
            "sanitation_rural_unimproved_other": [-1, -1, -1, -1, -1],
            "sanitation_rural_unimproved_total": [-1, -1, -1, -1, -1],
            "sanitation_total_improved": [-1, -1, -1, -1, -1],
            "sanitation_total_unimproved_shared": [-1, -1, -1, -1, -1],
            "sanitation_total_unimproved_opendefecation": [-1, -1, -1, -1, -1],
            "sanitation_total_unimproved_other": [-1, -1, -1, -1, -1],
            "sanitation_total_unimproved_total": [-1, -1, -1, -1, -1]
        }

    if year == 1990: idx = 0
    if year == 1995: idx = 1
    if year == 2000: idx = 2
    if year == 2005: idx = 3
    if year == 2008: idx = 4
                                                
    cur_country["population_total"][idx] = total
    cur_country["population_urban"][idx] = urban
    cur_country["population_rural"][idx] = rural
    
    cur_country["water_urban_improved_total"][idx] = urban_water_improved
    cur_country["water_urban_improved_piped"][idx] = urban_water_piped
    cur_country["water_urban_improved_other"][idx] = urban_water_otherimproved
    cur_country["water_urban_unimproved"][idx] = urban_water_unimproved
    
    cur_country["water_rural_improved_total"][idx] = rural_water_improved
    cur_country["water_rural_improved_piped"][idx] = rural_water_piped
    cur_country["water_rural_improved_other"][idx] = rural_water_otherimproved
    cur_country["water_rural_unimproved"][idx] = rural_water_unimproved
    
    cur_country["water_total_improved_total"][idx] = total_water_improved
    cur_country["water_total_improved_piped"][idx] = total_water_piped
    cur_country["water_total_improved_other"][idx] = total_water_otherimproved
    cur_country["water_total_unimproved"][idx] = total_water_unimproved
    
    cur_country["sanitation_urban_improved"][idx] = urban_sanitation_improved
    cur_country["sanitation_urban_unimproved_shared"][idx] = urban_sanitation_shared
    cur_country["sanitation_urban_unimproved_opendefecation"][idx] = urban_sanitation_opendefecation
    cur_country["sanitation_urban_unimproved_other"][idx] = urban_sanitation_otherunimproved
    cur_country["sanitation_urban_unimproved_total"][idx] = urban_sanitation_unimproved
    
    cur_country["sanitation_rural_improved"][idx] = rural_sanitation_improved
    cur_country["sanitation_rural_unimproved_shared"][idx] = rural_sanitation_shared
    cur_country["sanitation_rural_unimproved_opendefecation"][idx] = rural_sanitation_opendefecation
    cur_country["sanitation_rural_unimproved_other"][idx] = rural_sanitation_otherunimproved
    cur_country["sanitation_rural_unimproved_total"][idx] = rural_sanitation_unimproved
    
    cur_country["sanitation_total_improved"][idx] = total_sanitation_improved
    cur_country["sanitation_total_unimproved_shared"][idx] = total_sanitation_shared
    cur_country["sanitation_total_unimproved_opendefecation"][idx] = total_sanitation_opendefecation
    cur_country["sanitation_total_unimproved_other"][idx] = total_sanitation_otherunimproved
    cur_country["sanitation_total_unimproved_total"][idx] = total_sanitation_unimproved

f.close()

out2 = {}

def safe_add_values(continent, key, values):
    for i in range(0,5):
        if values[i] < 0: continue
        out2[continent][key][i] += values[i]

for country, values in out.items():
    if not out2.has_key(values["continent"]):
        out2[values["continent"]] = {
            "population_total": [0, 0, 0, 0, 0],
            "population_urban": [0, 0, 0, 0, 0],
            "population_rural": [0, 0, 0, 0, 0],
            "water_urban_improved_total": [0, 0, 0, 0, 0],
            "water_urban_improved_piped": [0, 0, 0, 0, 0],
            "water_urban_improved_other": [0, 0, 0, 0, 0],
            "water_urban_unimproved": [0, 0, 0, 0, 0],
            "water_rural_improved_total": [0, 0, 0, 0, 0],
            "water_rural_improved_piped": [0, 0, 0, 0, 0],
            "water_rural_improved_other": [0, 0, 0, 0, 0],
            "water_rural_unimproved": [0, 0, 0, 0, 0],
            "water_total_improved_total": [0, 0, 0, 0, 0],
            "water_total_improved_piped": [0, 0, 0, 0, 0],
            "water_total_improved_other": [0, 0, 0, 0, 0],
            "water_total_unimproved": [0, 0, 0, 0, 0],
            "sanitation_urban_improved": [0, 0, 0, 0, 0],
            "sanitation_urban_unimproved_shared": [0, 0, 0, 0, 0],
            "sanitation_urban_unimproved_opendefecation": [0, 0, 0, 0, 0],
            "sanitation_urban_unimproved_other": [0, 0, 0, 0, 0],
            "sanitation_urban_unimproved_total": [0, 0, 0, 0, 0],
            "sanitation_rural_improved": [0, 0, 0, 0, 0],
            "sanitation_rural_unimproved_shared": [0, 0, 0, 0, 0],
            "sanitation_rural_unimproved_opendefecation": [0, 0, 0, 0, 0],
            "sanitation_rural_unimproved_other": [0, 0, 0, 0, 0],
            "sanitation_rural_unimproved_total": [0, 0, 0, 0, 0],
            "sanitation_total_improved": [0, 0, 0, 0, 0],
            "sanitation_total_unimproved_shared": [0, 0, 0, 0, 0],
            "sanitation_total_unimproved_opendefecation": [0, 0, 0, 0, 0],
            "sanitation_total_unimproved_other": [0, 0, 0, 0, 0],
            "sanitation_total_unimproved_total": [0, 0, 0, 0, 0]
        }

    safe_add_values(values["continent"], "population_total", values["population_total"])
    safe_add_values(values["continent"], "population_urban", values["population_urban"])
    safe_add_values(values["continent"], "population_rural", values["population_rural"])

    safe_add_values(values["continent"], "water_urban_improved_total", values["water_urban_improved_total"])
    safe_add_values(values["continent"], "water_urban_improved_piped", values["water_urban_improved_piped"])
    safe_add_values(values["continent"], "water_urban_improved_other", values["water_urban_improved_other"])
    safe_add_values(values["continent"], "water_urban_unimproved", values["water_urban_unimproved"])

    safe_add_values(values["continent"], "water_rural_improved_total", values["water_rural_improved_total"])
    safe_add_values(values["continent"], "water_rural_improved_piped", values["water_rural_improved_piped"])
    safe_add_values(values["continent"], "water_rural_improved_other", values["water_rural_improved_other"])
    safe_add_values(values["continent"], "water_rural_unimproved", values["water_rural_unimproved"])

    safe_add_values(values["continent"], "water_total_improved_total", values["water_total_improved_total"])
    safe_add_values(values["continent"], "water_total_improved_piped", values["water_total_improved_piped"])
    safe_add_values(values["continent"], "water_total_improved_other", values["water_total_improved_other"])
    safe_add_values(values["continent"], "water_total_unimproved", values["water_total_unimproved"])

    safe_add_values(values["continent"], "sanitation_urban_improved", values["sanitation_urban_improved"])
    safe_add_values(values["continent"], "sanitation_urban_unimproved_shared", values["sanitation_urban_unimproved_shared"])
    safe_add_values(values["continent"], "sanitation_urban_unimproved_opendefecation", values["sanitation_urban_unimproved_opendefecation"])
    safe_add_values(values["continent"], "sanitation_urban_unimproved_other", values["sanitation_urban_unimproved_other"])
    safe_add_values(values["continent"], "sanitation_urban_unimproved_total", values["sanitation_urban_unimproved_total"])

    safe_add_values(values["continent"], "sanitation_rural_improved", values["sanitation_rural_improved"])
    safe_add_values(values["continent"], "sanitation_rural_unimproved_shared", values["sanitation_rural_unimproved_shared"])
    safe_add_values(values["continent"], "sanitation_rural_unimproved_opendefecation", values["sanitation_rural_unimproved_opendefecation"])
    safe_add_values(values["continent"], "sanitation_rural_unimproved_other", values["sanitation_rural_unimproved_other"])
    safe_add_values(values["continent"], "sanitation_rural_unimproved_total", values["sanitation_rural_unimproved_total"])

    safe_add_values(values["continent"], "sanitation_total_improved", values["sanitation_total_improved"])
    safe_add_values(values["continent"], "sanitation_total_unimproved_shared", values["sanitation_total_unimproved_shared"])
    safe_add_values(values["continent"], "sanitation_total_unimproved_opendefecation", values["sanitation_total_unimproved_opendefecation"])
    safe_add_values(values["continent"], "sanitation_total_unimproved_other", values["sanitation_total_unimproved_other"])
    safe_add_values(values["continent"], "sanitation_total_unimproved_total", values["sanitation_total_unimproved_total"])

print "var years = [1990, 1995, 2000, 2005, 2008];"
print "var countries = " + json.dumps(out, indent=2) + ";"
print "var continents = " + json.dumps(out2, indent=2) + ";"

