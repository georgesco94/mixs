import React, { Component } from 'react';
// import i1 from '../images/i1.jpg';
// import i2 from '../images/i2.jpeg';
// import i3 from '../images/i3.jpeg';
import i4 from '../images/i4.jpeg';
import i9 from '../images/i9.jpg';
import ii from '../images/ii.jpeg';
// import i6 from '../images/i6.jpeg';


import '../styles/banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img className="banner-img" src={i9} alt="bannerimg"/>
      </div>
    );
  }
}

export default Banner;
