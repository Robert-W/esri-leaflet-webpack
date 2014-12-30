var L = require('leaflet');
var MapController = {};

MapController.init = function () {
	
	// Create Map, Disable Default zoom control position
	var map = L.map('map', { 
		zoomControl: false,
		detectRetina: true
	}).setView([37.78, -92.85], 4);

	window.map = map;

	L.control.zoom({ position: 'topright' }).addTo(map);

	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: osmAttrib});
	map.addLayer(osm);
	//L.esri.basemapLayer('DarkGray').addTo(map);
	// var layer = new L.StamenTileLayer("toner");
	// map.addLayer(layer);

};

module.exports = MapController;