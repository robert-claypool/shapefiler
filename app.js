// We don't need a map, but the page is pretty dull without one.
// var map = L.map('map').setView([38.5, -96.0], 4);
// L.esri.basemapLayer("Topographic").addTo(map);

var shpwrite = require('shp-write');
var fs = require('fs');
var terraformer = require('terraformer-arcgis-parser');

// set names for feature types and the zipped folder
var options = {
    folder: 'shapesfiles',
    types: {
        point: 'points',
        line: 'polylines'
    }
}

// hard-coding the data for now
var esrij = {
    "geometry": {
        "paths": [
            [
                [-13839136.6, 4976841.8],
                [-13889878.3, 4782936.5],
                [-13634075.5, 4553450.2],
                [-13617070.7, 4552181.3],
                [-13615511.2, 4552343.0],
                [-13615078.9, 4552747.4],
                [-13572218.4, 4627161.7],
                [-13479350.3, 4712230.0],
                [-13222431.0, 4826358.4],
                [-13122155.2, 4996500.5],
                [-12747615.0, 5040422.9],
                [-12106895.1, 5105765.1],
                [-11745690.1, 5029245.6],
                [-11265129.1, 5034549.5],
                [-10552052.2, 4730524.9],
                [-10550690.8, 4730843.6],
                [-10549862.0, 4731213.5],
                [-10548356.9, 4732134.0],
                [-10547321.3, 4733015.6],
                [-10544889.7, 4734961.1],
                [-10544171.3, 4735532.9],
                [-10544130.6, 4735567.0],
                [-10542836.6, 4736515.5],
                [-10542314.5, 4736673.3],
                [-10541812.5, 4736690.5],
                [-10541192.4, 4736599.6],
                [-10541063.5, 4736577.4],
                [-10540323.7, 4736442.3],
                [-10540187.8, 4736408.9],
                [-10539948.7, 4736347.1],
                [-10539787.9, 4736282.8],
                [-10539669.5, 4736222.8],
                [-10538994.6, 4735827.0],
                [-10538874.0, 4735748.6],
                [-10538846.4, 4735745.2],
                [-10538963.5, 4735842.3],
                [-10538840.0, 4735775.3],
                [-10538697.3, 4735715.3],
                [-10538656.3, 4735700.2],
                [-10538449.0, 4735588.4],
                [-10538278.5, 4735518.0],
                [-10538227.5, 4735499.7],
                [-10537696.5, 4735366.9]
            ]
        ],
        "spatialReference": {
            "latestWkid": 3857,
            "wkid": 102100
        },
        "type": "polyline"
    },
    "attributes": {
        "id" : 0
    }
};

// Convert to geoJSON and wrap it in a collection
var geoj = terraformer.parse(esrij);
var collection = {
    type: "FeatureCollection",
    features: [geoj]
};
var content = shpwrite.zip(collection, options);

// We make <a download="shapes.zip" ... > because some browsers will
// honor the given filename, http://stackoverflow.com/a/16523173/23566
var link = document.createElement('a');
link.download = "shapes.zip";
link.href = 'data:application/zip;base64,' + content;
link.click();
