import babelPolyfill from 'babel-polyfill';
import {main as config} from 'js/config';
import {loadScript} from 'utils/loaders';
import {loadCss} from 'utils/loaders';
import {Map} from 'map/Map';
import React from 'react';

if (!babelPolyfill) { alert('Error: babel-polyfill not loaded.'); }

window.app = {
  debugEnabled: false,
  debug: function (message) {
    if (this.debugEnabled) {
      var print = typeof message === 'string' ? console.log : console.dir;
      print.apply(console, [message]);
    }
  }
};

let lazyloadStylesheets = () => {
  loadCss(`http://cdn.leafletjs.com/leaflet-${config.leafletVersion}/leaflet.css`);
};

let loadApp = () => {
  app.debug('main >>> loadApp');
  lazyloadStylesheets();
  // Load Leaflet
  loadScript(`http://cdn.jsdelivr.net/leaflet/${config.leafletVersion}/leaflet.js`, () => {
    loadScript(`http://cdn.jsdelivr.net/leaflet.esri/${config.esriLeafletVersion}/esri-leaflet.js`, () => {
      React.render(<Map />, document.getElementById('map-container'));
    });
  });
};

if (document.readyState === 'loaded') {
  loadApp();
} else {
  window.onload = loadApp;
}
