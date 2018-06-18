import React, { Component } from 'react';

import '../styles/marker.css';

class Marker extends Component {
  render() {
    return (
      <div className="marker">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Marker;
