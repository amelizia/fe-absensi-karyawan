import React, { Component, useState }  from "react";
import Cookies from "js-cookie";
class  Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      lat: 0,
      lng: 0,
      currentTime: '',
      error: null,
    };
    this.handleCheckin = this.handleCheckin.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }
    
  componentWillMount(){
    this.clock = setInterval(
      () => this.setCurrentTime(),
      1000
    )
    
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
    } 
    else {
      alert('The browser does not support geolocation')
    }
  }

  setCurrentTime(){
    this.setState({
      currentTime: 
              (new Date().toLocaleDateString("zh-Hans-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
      }).replace(/\//g, '-')+ " " + 
      new Date().toLocaleTimeString("en-GB",{}))
    });
  }

  async handleCheckin() {
    const payload = {
      "current_date": this.state.currentTime, 
      "user_latitude": this.state.lat,
      "user_longitude": this.state.lng 
    }
    const res = await fetch(
      'https://ipe8-worker-attendance-be.herokuapp.com/api/checkin',
      {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          // 'Access-Control-Allow-Origin':'*', 
          Authorization: Cookies.get("jwt"),
        },
        body: JSON.stringify(payload)
      }
    )
    .catch((data) => {
      this.setState({ error: data.message });
    });
  }

  async handleCheckout() {
    const payload = {
      "current_date": this.state.currentTime, 
      "user_latitude": this.state.lat,
      "user_longitude": this.state.lng 
    }
    const res = await fetch(
      'https://ipe8-worker-attendance-be.herokuapp.com/api/checkout',
      {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          // 'Access-Control-Allow-Origin':'*', 
          Authorization: Cookies.get("jwt"),
        },
        body: JSON.stringify(payload)
      }
      ).catch((data) => {
        this.setState({ error: data.message });
      });
    }

  render() {
    const { p } = this.props;
    const { lat, lng } = this.state;
    console.log(lat, lng)

    return (
      <div className="text-center">
        <h1 className="mb-6 font-bold 2xl:text-4xl md:text-2xl text-lg">Your current location</h1>
        {this.state.currentTime && <p className="font-semibold md:text-lg text-base ">{this.state.currentTime}</p>}
        {<p >
        {lat && <a className="font-semibold md:text-lg text-base">{lat.toFixed(7)}</a>}
        {lng && <a className="font-semibold md:text-lg text-base">, {lng.toFixed(7)}</a>}
        </p>}
        {<a href='/maps' className="sm:text-sm text-xs font-medium text-gray-600 transform hover:text-gray-800 hover:text-md">see the maps</a>}
            
        <p className="group relative w-full flex justify-center mt-12">
            <button onClick={this.handleCheckin}
            className="py-2 px-4 border border-transparent sm:text-sm text-xs tracking-widest font-medium text-white hover:bg-blue-custom-2 bg-green-custom-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-custom-3">
              Check-in
          </button>
          <button onClick={this.handleCheckout}
            className="ml-12 py-2 px-4 border border-transparent sm:text-sm text-xs tracking-widest font-medium text-white hover:bg-blue-custom-2 bg-green-custom-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-custom-3">
              Check-out
          </button>
        </p> 
        
        {this.state.error !== null && <p className="mt-2 text-sm text-center text-blue-custom-2">{this.state.error}</p>}
    
      </div>
    );
   }
  };

export default Address;