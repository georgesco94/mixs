import React, { Component } from 'react';
import Banner from './banner';



import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Banner />
      </div>
    );
  }
}

export default Home;
