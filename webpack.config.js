/* globals __dirname, process, module */
var bundlePath = __dirname + (process.env.ENV === 'prod' ? '/dist' : '/build');

module.exports = {
	entry: {
    bundle: __dirname + '/src/js/main.js'
  },
  output: {
    path: bundlePath,
    filename: "/js/main.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
			{	test: /\.js?$/, exclude: /(node_modules|src\/bower)/, loader: 'babel' }
    ]
  },
  externals: {
    "leaflet": "L"
  },
  resolve: {
    alias: {
      'js': __dirname + '/src/js',
			'map': __dirname + '/src/js/map',
			'utils': __dirname + '/src/js/utils',
			'stores': __dirname + '/src/js/stores',
			'actions': __dirname + '/src/js/actions',
			'constants': __dirname + '/src/js/constants',
			'react': __dirname + '/src/bower/react/' + (process.env.ENV === 'prod' ? 'react.min' : 'react'),
			'babel-polyfill': __dirname + '/src/bower/babel-polyfill/browser-polyfill'
    }
  }
};
