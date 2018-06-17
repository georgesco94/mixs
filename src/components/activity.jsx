import React, { Component } from 'react';
import '../styles/main.css';
import '../styles/activity.css';

class Activity extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.updateSelected(this.props.match.params.id);
  }
  render() {
    if (!this.props.activity) return null ;
    const {image,description,location,city,date} = this.props.activity;
    return (
      <div className="main">
        <div className="acitvity-grid">

          <div className="image-description-box">
            <div className="activity-image">
              <img className="activity-image" src={image} />
            </div>
            <div className="activity-text">
              {description}
              Come to {location}
            </div>
          </div>

          <div className="map-location-box">
            {this.props.activity.city}
            {this.props.activity.location}
          </div>

        </div>
      </div>
    );
  }
}

export default Activity;
