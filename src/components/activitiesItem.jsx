import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Activity from './activity';

const numToMonth = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};


class ActivtitiesItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {image,date,city,location,description} = this.props.activity;
    const id = this.props.activityId;

    const eventDate = new Date(date);
    const day = eventDate.getDay();
    const month = numToMonth[ eventDate.getMonth() ];

    return (
      <div className="activity-box">
        <div className="activity-image-box">
          <img className="activity-image" src={image} />
          <div className="date-badge">
            {month} {day}
          </div>
        </div>
        <div className="activity-info-box">
          <Link to={`/events/${id}`}>{location}</Link>
        </div>
      </div>
    );
  }
}

export default ActivtitiesItem;
