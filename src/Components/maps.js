import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '83%'
};

class Maps extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lng: 0
    };
  }

  componentDidMount(){
    if (!!navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => console.log(err),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
      );
    } else {
      alert('The browser does not support geolocation')
    }
  }

  render() {
    const { lat, lng } = this.state;
    console.log(lat, lng)
    const currentPosition = {
      lat: lat,
      lng: lng
    }
    return (
      <div className="h-screen bg-whi-custom-1">
        {<a href='/dashboard' className="pr-4 pt-4 float-right"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg></a>}
        {<h1 className="p-4 font-bold 2xl:text-4xl md:text-2xl text-lg">Your current location</h1>}
       
        <Map 
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          center={currentPosition}
        >
         <Marker
          position={currentPosition}
        />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAWa7-RTKOR7BulmJ1PWmDaJ9r2ZB8UqAs' //API belong to others resource
})(Maps);
