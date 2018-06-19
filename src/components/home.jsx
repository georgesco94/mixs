import React, { Component } from 'react';
import Banner from './banner';
import Activities from './activities';



import '../styles/main.css';

class Home extends Component {
  componentDidMount() {
    this.props.updateFilterText("");
  }
  render() {
    const {activities,filterText} = this.props;
    return (
      <div className="main">
        <Banner />
        <Activities activities={activities} filterText={filterText} />
      </div>
    );
  }
}

export default Home;
