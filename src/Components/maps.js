import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class Maps extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
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
  apiKey: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDNjpHU_Fxjkx7q2mjCfoA2zU2f7EXTWoI&v&v=3.exp&libraries=geometry,drawing,places' //API belong to others resource
})(Maps);