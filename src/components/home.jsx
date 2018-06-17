import React, { Component } from 'react';
import Banner from './banner';
import Activities from './activities';



import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <Banner />
        <Activities activities={this.props.activities} />
      </div>
    );
  }
}

export default Home;
