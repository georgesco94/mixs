import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Activity from './activity';

const numToMonth = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
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
            <span className="day">{day}</span>
            <span className="month">{month}</span>
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
