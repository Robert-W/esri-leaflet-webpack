import {Dispatcher as dispatcher} from 'js/dispatcher';
import constants from 'constants/MapConstants';
import MapController from 'map/MapController';
import {map as config} from 'js/config';

export const MapActions = {

  createMap () {
    app.debug('MapActions >>> createMap');
    var loadingIndicator = document.getElementById('map-loader');
    var deferred = new Promise((resolve, reject) => {
      // Remove the loader
      loadingIndicator.className = 'hidden';
      // Add the map, zoom controls, base layer, and setup events
      app.map = L.map(config.id, config.options);
      L.control.zoom(config.zoomOptions).addTo(app.map);
      L.esri.basemapLayer(config.basemap, config.basemapOptions).addTo(app.map);
      app.map.on('moveend', this.extentChanged);
      resolve();
    });
    return deferred;
  },

  extentChanged (evt) {
    app.debug('MapActions >>> extentChanged');
    let center = app.map.getCenter();
    dispatcher.dispatch({
      actionType: constants.extent,
      data: {
        x: center.lng,
        y: center.lat,
        z: app.map.getZoom()
      }
    });
  },

  setBasemap (basemap) {
    app.debug('MapActions >>> setBasemap');
    MapController.changeBasemap(basemap);
    dispatcher.dispatch({
      actionType: constants.basemap,
      data: basemap
    });
  }

};
