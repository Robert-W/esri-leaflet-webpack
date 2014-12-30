/** @jsx React.DOM */
var React = require('react');
var MapController = require('map/MapController');
/* jshint ignore:start */
module.exports = React.createClass({

	componentDidMount: function () {
		MapController.init();
	},

	render: function () {
		return (
			<div className="map-panel">
				<div id='map' />
			</div>
		);
	}
});
/* jshint ignore:end */