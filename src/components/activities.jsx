import React, { Component } from 'react';
import ActivtitiesItem from './activitiesItem';



import '../styles/activities.css';

class Activities extends Component {

  componentDidMount() {
    console.log('mounting');
  }

  render() {

    const activities = this.props.activities;
    const activityItems = Object.keys(activities).map( (id,idx) => {
      return (<ActivtitiesItem key={idx} activityId={id} activity={ activities[id] } />);
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
