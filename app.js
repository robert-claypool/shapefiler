// We don't need a map, but the page is pretty dull without one.
// var map = L.map('map').setView([38.5, -96.0], 4);
// L.esri.basemapLayer("Topographic").addTo(map);

var shpwrite = require('shp-write');
var fs = require('fs');

// set names for feature types and the zipped folder
var options = {
    folder: 'shapesfiles',
    types: {
        point: 'points',
        line: 'polylines'
    }
}

// hard-coding the data for now
var geoj = {
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
};

// We make an <a download="shapes.zip" ... > because some browsers will
// honor the given filename, http://stackoverflow.com/a/16523173/23566
var content = shpwrite.zip(geoj, options);
var link = document.createElement('a');
link.download = "shapes.zip";
link.href = 'data:application/zip;base64,' + content;
link.click();
