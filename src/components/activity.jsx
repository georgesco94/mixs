import React, { Component } from 'react';
import '../styles/main.css';
import '../styles/activity.css';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import {constants} from './constants.js';

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
    const defaultZoom = 11;
    const eventDate = new Date(date);
    const day = eventDate.getDate();
    const month = constants.numToMonth[ eventDate.getMonth() ];
    return (
      <div className="main">
        <div className="acitvity-grid">

          <div className="image-description-box">
            <div className="img-container">
              <img className="activity-img" src={image} />
            </div>
          </div>

          <div className="map-location-box">
            <div className="activity-text">
              {description}. <br/>
            Come to {location} in {city} on {date}
              <br/>Duration: {duration} hours
            </div>
            <GoogleMapReact className="google-map"
              bootstrapURLKeys={{ key: 'AIzaSyBkx5v_WpasWf7d9Dqjz3h1y6xp2TnSDEY' }}
              defaultCenter={center}
              defaultZoom={defaultZoom}
             >
             <Marker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
          </div>

        </div>
      </div>
    );
  }
}

export default Activity;
