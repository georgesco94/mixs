import React, { Component } from 'react';

import '../styles/badge.css';
class Badge extends Component {
  render() {
    const day = this.props.day;
    const month = this.props.month;

    return (
      <div className="date-badge">
        <span className="day">{day}</span>
        <span className="month">{month}</span>
      </div>
    );
  }
}

export default Badge;
