import React, { Component } from 'react';
import '../styles/main.css';
import '../styles/activity.css';

class Activity extends Component {

  componentDidMount() {
    this.props.updateSelected(this.props.match.params.id);
  }

  render() {
    if (!this.props.activity) return null ;
    const {image,description,location,city,date,duration} = this.props.activity;

    return (
      <div className="main">
        <div className="acitvity-grid">

          <div className="image-description-box">
            <div className="img-container">
              <img className="activity-img" src={image} />
            </div>
            <div className="activity-text">
              {description}. <br/>
              Come to {location} in {city}!
            </div>
          </div>

          <div className="map-location-box">
            {city} for {duration} hours
          </div>

        </div>
      </div>
    );
  }
}

export default Activity;
