import React, { Component } from 'react';
import Banner from './banner';
import Activities from './activities';



import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Banner />
        <Activities />
      </div>
    );
  }
}

export default Home;
