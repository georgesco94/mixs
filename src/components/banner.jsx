import React, { Component } from 'react';
import i9 from '../images/i9.jpg';



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
