import React, { Component } from 'react';
import '../styles/main.css';
import '../styles/activity.css';
import GoogleMapReact from 'google-map-react';

class Activity extends Component {

  componentDidMount() {
    this.props.updateSelected(this.props.match.params.id);
  }

  render() {
    if (!this.props.activity) return null ;
    const {image,description,location,city,date,duration,location_lat,location_lng} = this.props.activity;
    const center = {
      lat: location_lat,
      lng: location_lng
    };
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
            {city} <br /> Duration of {duration} hours
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBkx5v_WpasWf7d9Dqjz3h1y6xp2TnSDEY' }}
              defaultCenter={center}
              defaultZoom={11}
             />
          </div>

        </div>
      </div>
    );
  }
}

export default Activity;
