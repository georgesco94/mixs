import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Activity from './activity';

class ActivtitiesItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {image,date,city,location} = this.props.activity;
    const id = this.props.activityId;

    return (
      <div className="activity-box">
        <Link to={`/events?${id}`}>{location}</Link>
      </div>
    );
  }
}

export default ActivtitiesItem;
