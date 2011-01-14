import json

f=open('countries.txt')
countries = { 'AF': [], 'AS': [], 'EU': [], 'NA': [], 'SA': [], 'OC': [], 'AN': [] }

for line in f:
    continent = line[:2]
    country = line[14:]
    country = country[:country.find(',')]
    countries[continent].append(country)


f.close()

print "var continents = " + json.dumps(countries, indent=2)
