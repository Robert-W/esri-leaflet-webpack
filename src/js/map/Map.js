import {MapActions as actions} from 'actions/MapActions';
import {map as config} from 'js/config';
import React from 'react';

export class Map extends React.Component {

  constructor (props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount () {
    actions.createMap().then(() => {
      this.setState({ loaded: true });
    });
  }

  render () {
    return (
      <div id={config.id} className='map'>

      </div>
    );
  }

}
