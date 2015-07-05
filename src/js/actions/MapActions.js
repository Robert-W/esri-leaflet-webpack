// import {Dispatcher as dispatcher} from 'js/dispatcher';
// import constants from 'constants/MapConstants';
import {map as config} from 'js/config';

export const MapActions = {

  createMap () {
    app.debug('MapActions >>> createMap');
    var loadingIndicator = document.getElementById('map-loader');
    var deferred = new Promise((resolve, reject) => {
      // Add the map, zoom controls, and base layer
      app.map = L.map(config.id, config.options);
      L.control.zoom(config.zoomOptions).addTo(app.map);
      L.esri.basemapLayer(config.basemap, config.basemapOptions).addTo(app.map);
      loadingIndicator.className = 'hidden';
      resolve();
    });
    return deferred;
  }

};
