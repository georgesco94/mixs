import React, { Component } from 'react';
import ActivtitiesItem from './activitiesItem';



import '../styles/activities.css';

class Activities extends Component {

  render() {
    const activities = this.props.activities;
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
