import csv
FILE = 'data.csv'
OUTPUT = 'data.js'
COLS = ['latitude',
		'longitude',
		'facname']

LEFT = -74.008
RIGHT = -73.972
TOP = 40.7209
BOTTOM = 40.699

with open(FILE) as f:
	r = csv.reader(f)
	header = r.next()
	print header
	cols = {}
	for col in COLS:
		cols[col] = header.index(col)

	print cols
	data = []
	for row in r:
		lat = float(row[cols['latitude']])
		if lat > TOP or lat < BOTTOM:
			continue
		lon = float(row[cols['longitude']])
		if lon < LEFT or lon > RIGHT:
			continue
		name = row[cols['facname']]
		if name == 'Bergtraum HS - M' \
		or name == 'Manhattan Early College School For Advertising (P-Tech)' \
		or name == 'The Urban Assembly School For Emergency Management' \
		or name == 'Urban Assembly Maker Academy' \
		or name == 'Research Foundation of CUNY' \
		or name == 'Bridge To Enter Advanced Mathematics':
			continue
		data.append((lat, lon, name))

	
	data = map(lambda (x, y, z): '{lat: ' + str(x) + ', lng: ' + str(y) + ', name: "' + z + '"}', data)
	op = 'let data = [' + ', '.join(data) + ']'
	with open(OUTPUT, 'w') as op_f:
		op_f.write(op)