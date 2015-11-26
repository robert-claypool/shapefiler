var shpwrite = require('shp-write');

window.downloadShapefile =function(){
	// (optional) set names for feature types and zipped folder
	var options = {
		folder: 'myshapes',
		types: {
			point: 'mypoints',
			line: 'mylines'
		}
	}

	// hard-coding the data in this page for now
	shpwrite.download({
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [0, 0]
				},
				properties: {
					name: 'Foo'
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [0, 10]
				},
				properties: {
					name: 'Bar'
				}
			}
		]
	}, options); // triggers a download of a zip file with shapefiles contained within.	
};