import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Activity from './activity';
import Badge from './badge';
import {constants} from './constants.js';


class ActivtitiesItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {image,date,city,location,description,time} = this.props.activity;
    const id = this.props.activityId;
    const eventDate = new Date(date);
    const day = eventDate.getDate();
    const month = constants.numToMonth[ eventDate.getMonth() ];

    return (
      <div className="activity-box">
        <Link to={`/events/${id}`}>
          <div className="activity-image-box">
            <img className="activity-image" src={image} />
            <Badge day={day} month={month} />
          </div>
          <div className="activity-info-box">
            <div className="location-text">{location} {month} {day}</div>
            {description}
          </div>
        </Link>
      </div>
    );
  }
}

export default ActivtitiesItem;
