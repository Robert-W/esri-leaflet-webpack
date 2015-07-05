export const config = {

  main: {
    appVersion: '1.0.0',
    leafletVersion: '0.7.3',
    esriLeafletVersion: '1.0.0-rc.8'
  },

  map: {
    id: 'map',
    options: {
      zoom: 4,
      center: [41, -98], // LatLng, [y, x]
      zoomControl: false,
      scrollWheelZoom: false
    },
    basemap: 'NationalGeographic',
    basemapOptions: {
      detectRetina: true,
      id: 'basemap'
    },
    zoomOptions: {
      position: 'topright'
    }
  },

  uiComponents: {
    basemaps: [
      { label: 'Topographic', value: 'Topographic', icon: 'terrain_labels.jpg' },
      { label: 'Dark Gray Canvas', value: 'DarkGray', icon: 'DGCanvasBase.png' },
      { label: 'Imagery', value: 'Imagery', icon: 'imagery_labels.jpg' },
      { label: 'National Geographic', value: 'NationalGeographic', icon: 'natgeo.jpg' },
      { label: 'Shaded Relief', value: 'ShadedRelief', icon: 'temposm.jpg' }
    ]
  }

};

export const basemaps = config.uiComponents.basemaps;
export const main = config.main;
export const map = config.map;
