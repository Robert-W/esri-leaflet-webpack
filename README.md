esri-leaflet-webpack
====================
> Open source awesomeness.  A simple demo app using the Esri-Leaflet mapping API, React.js, Facebook's library for building user interfaces, and webpack, an awesome build tool.

<p>The purpose of this is to demonstrate a very simple and practical use case for using these open-source tools together.</p>

## Installation

This project requires that Node.js and Webpack both be installed.

#### Installing Node.js
<p>View the <a href='http://nodejs.org' target='_blank'>node.js</a> homepage and click download.</p>
#### Installing Webpack
<p>View <a href='http://webpack.github.io/docs/tutorials/getting-started/' target='_blank'>webpack getting started</a> for instructions.  I would recommend going through this tutorial if you have not used webpack before, it will give you a brief look at what webpack can do for you.</p>
#### Installing remaining dependencies
<p>You will need to install the remaining dependencies to help webpack load some things other than ordinary javascript modules.  Through these loaders we can require css files, stylus files, and JSX files without the need for Grunt or Gulp.</p>

## Development
<p>webpack is configured to run off of npm scripts.  For development, run:</p><pre lang="text"><code>npm run start</code></pre>
<p>This will run <code>ENV=dev webpack -p -d --watch</code>. This minifies the bundle, generates source maps, and starts a watch for modified files to rerun webpack -p -d when something gets updated.</p>

## Build
<p>To generate a build, run:</p>
<pre lang='text'>
<code>npm run build</code>
</pre>
<p>This runs <code>rm -rf build && ENV=prod webpack -p && cp ./src/{.htaccess,index.html} ./build/ && mkdir ./build/libs && cp ./src/libs/*.js ./build/libs</code>. So it will not include source maps or run a watch command. It will output the bundles and all necessary assets(html files, images, and libraries) into a build directory next to the src directory.</p>