/** @jsx React.DOM */
var App;
(function () {
	var Map = require('components/Map');
	var Menu = require('components/Menu');
	var MenuButton = require('components/MenuButton');

	require('styl/menu.styl');

	App = React.createClass({

		render: function () {
			/* jshint ignore:start */
			return (
				<div>
					<Menu />
					<div ref='mainPanel' className='main-content'>
						<MenuButton callback={this.toggleMenu} />
						<Map />
					</div>
				</div>
			);
			/* jshint ignore:end */
		},

		toggleMenu: function () {
			var STYLE = typeof document.body.style.MozTransform !== 'undefined' ? 'MozTransform' : 'webkitTransform';
			var mainPanel = this.refs.mainPanel.getDOMNode();
			var duration = 200;
			var fps = 1000 / 60;
			var width = 280;
			var step = (fps / duration) * width;
			var isClosing = mainPanel.style[STYLE] !== "";
			var position = isClosing ? 280 : 0;
			var easeFactor = 0.35;
			var easingPoint = isClosing ? width * easeFactor : width - (width * easeFactor);

			var animateClose = function () {
				position -= (position >= easingPoint ? step : step / 2);
				mainPanel.style[STYLE] = 'translate3d(' + (position <= 0 ? 0 : position) + 'px, 0, 0)';

				if (position > 0) {
					requestAnimationFrame(animateClose);
				} else {
					mainPanel.style[STYLE] = "";
				}
			};

			var animateOpen = function () {
				position += (position <= easingPoint ? step : step / 2);
				mainPanel.style[STYLE] = 'translate3d(' + (position >= width ? width : position) + 'px, 0, 0)';
				
				if (position < width) {
					requestAnimationFrame(animateOpen);
				}
			};

			if (isClosing) {
				requestAnimationFrame(animateClose);
			} else {
				requestAnimationFrame(animateOpen);
			}

		}

	});

})();

module.exports = App;