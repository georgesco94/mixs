import React, { Component } from 'react';
import i1 from '../images/i1.jpg';

import '../styles/banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img className="banner-img" src={i1} />
      </div>
    );
  }
}

export default Banner;
