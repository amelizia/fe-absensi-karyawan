import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '30%',
  height: '40%'
};

class Maps extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      lat: 0,
      lng: 0
    };
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{
            lat: -6.1750,
            lng: 106.8283
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAWa7-RTKOR7BulmJ1PWmDaJ9r2ZB8UqAs' //API belong to others resource
})(Maps);