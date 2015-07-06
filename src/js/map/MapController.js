import {map as config} from 'js/config';

export default {

  changeBasemap: (basemap) => {
    let baseLayer;

    app.map.eachLayer((layer) => {
      if (layer.options.id === 'basemap') { baseLayer = layer; }
    });

    if (baseLayer) {
      app.map.removeLayer(baseLayer);
      baseLayer = L.esri.basemapLayer(basemap, config.basemapOptions);
      app.map.addLayer(baseLayer);
    }

  }

};
