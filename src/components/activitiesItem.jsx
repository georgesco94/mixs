import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ActivtitiesItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {image,date,city,location} = this.props.activity;
    return (
      <div className="activity-box">
        {location}
      </div>
    );
  }
}

export default ActivtitiesItem;
