import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class ActivtitiesItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {image,date,city,location} = this.props.activity;
    return (
      <div className="activity-box">
        <Link to={`/events`}>{location}</Link>
      </div>
    );
  }
}

export default ActivtitiesItem;
