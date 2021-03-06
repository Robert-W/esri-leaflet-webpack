import React from 'react';

class BasemapGalleryItem extends React.Component {

    render () {
      return (
        <li
          key={this.props.value}
          onClick={this.props.click.bind(this, this.props)}
          className={'basemap-gallery-item pointer' + (this.props.active ? ' active' : '')}
        >
          <span className='basemap-gallery-item-icon' style={{ background: "url('" + this.props.icon + "')" }}/>
          <div className='basemap-gallery-item-label'>{this.props.label}</div>
        </li>
      );
    }

}

BasemapGalleryItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  click: React.PropTypes.func.isRequired,
  active: React.PropTypes.bool.isRequired
};

export { BasemapGalleryItem as default };
