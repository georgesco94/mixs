import React, { Component } from 'react';

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
