import React, { Component } from 'react';
import ActivtitiesItem from './activitiesItem';



import '../styles/activities.css';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5b25c0ad310000d30f6a7254')
      .then( results => results.json()).then(acts => {
        this.setState( { activities: acts } );
      }
    );
  }

  render() {
    const activities = this.state.activities;
    const activityItems = activities.map( (activity,idx) => {
      return (<ActivtitiesItem key={idx} activity={activity} />);
    });

    return (
      <div className="activities">
        <div className="activities-grid">
          {activityItems}
        </div>
      </div>
    );
  }
}

export default Activities;
