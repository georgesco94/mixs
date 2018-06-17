import React, { Component } from 'react';
import Banner from './banner';
import Activities from './activities';



import '../styles/home.css';

class Home extends Component {
  render() {
    const {activities,filterText} = this.props;
    return (
      <div className="home">
        <Banner />
        <Activities activities={activities} filterText={filterText} />
      </div>
    );
  }
}

export default Home;
