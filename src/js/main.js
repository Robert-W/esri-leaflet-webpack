/** @jsx React.DOM */
(function (win, doc) {

	require('styl/app.styl');

	var launch = function () {
		var React = require('react');
		var App = require('components/App');
		/* jshint ignore:start */
		React.render(<App />, document.getElementById("react-root"));		
		/* jshint ignore:end */
	};

	win.requestAnimationFrame = (function () {
  	return win.requestAnimationFrame ||
      win.webkitRequestAnimationFrame ||
      win.mozRequestAnimationFrame ||
      win.oRequestAnimationFrame ||
  		win.msRequestAnimationFrame;
  })();

  if (win.requestAnimationFrame) {
    win.requestAnimationFrame(launch);
  } else if (doc.readyState === "loaded") {
    launch();
  } else {
    win.onload = launch;
  }


})(window, document);