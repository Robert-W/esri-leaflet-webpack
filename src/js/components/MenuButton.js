/** @jsx React.DOM */
var React = require('react');

/* jshint ignore:start */
module.exports = React.createClass({
	render: function () {
		return (
			<div className="menu-button pointer" title='Menu' onClick={this.props.callback}>
				{String.fromCharCode(9776)}
			</div>
		);
	}
});
/* jshint ignore:end */