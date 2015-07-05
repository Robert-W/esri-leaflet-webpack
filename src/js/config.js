export const config = {

  main: {
    leafletVersion: '0.7.3',
    esriLeafletVersion: '1.0.0-rc.8'
  },

  map: {
    id: 'map',
    options: {
      center: [41, -98], // LatLng, [y, x]
      zoom: 4,
      zoomControl: false
    },
    basemap: 'NationalGeographic',
    basemapOptions: {
      detectRetina: true
    },
    zoomOptions: {
      position: 'topright'
    }
  }

};

export const main = config.main;
export const map = config.map;
