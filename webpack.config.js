var bundlePath = __dirname + (process.env.ENV === 'prod' ? '/build' : '/src');

module.exports = {
	entry: {
    bundle: __dirname + '/src/js/main.js'
  },
  output: {
    path: bundlePath,
    filename: "/js/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "jsx-loader?harmony" },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },
  externals: {
    "react": "React",
    "leaflet": "L"
  },
  resolve: {
    alias: {
      'js': __dirname + '/src/js',
      'styl': __dirname + '/src/css',
      'map': __dirname + '/src/js/map',
      'utils': __dirname + '/src/js/utils',
      'components': __dirname + '/src/js/components'
    }
  }
};