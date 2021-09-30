import React, { useState } from 'react';
// import axios from 'axios';
import Geocode from "react-geocode";

  const Address = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [Add, setAdd] = useState(null);
  const [Tmpstmp, setTmpstmp] = useState (null);
  const [status, setStatus] = useState(null);

  const API_Key = "AIzaSyAWa7-RTKOR7BulmJ1PWmDaJ9r2ZB8UqAs";

      // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
      Geocode.setApiKey(API_Key);
      // ROOFTOP param returns the most accurate result.
      Geocode.setLocationType("ROOFTOP");
      // set response language. Defaults to english.
      Geocode.setLanguage("en");
      // Enable or disable logs. Its optional.
      Geocode.enableDebug();


  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      setTmpstmp(
        new Date().toLocaleDateString("zh-Hans-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
      }).replace(/\//g, '-')+ " " + 
      new Date().toLocaleTimeString("en-GB",{}));

      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });

      Geocode.fromLatLng(lat, lng).then(
        (response) => {
          setAdd(response.results[0].formatted_address);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  return (
    <div className="text-center">
      <button className="mb-6 font-bold 2xl:text-4xl md:text-2xl text-lg" onClick={getLocation}>Your current location</button>
      <p className="font-semibold md:text-lg text-base">{status}</p>
      {Tmpstmp && <p className="font-semibold md:text-lg text-base ">{Tmpstmp}</p>}
      {lat && <a className="font-semibold md:text-lg text-base">{lat.toFixed(7)}</a>}
      {lng && <a className="font-semibold md:text-lg text-base">, {lng.toFixed(7)}</a>}
      {Add && <p className="sm:text-sm text-xs font-medium text-gray-600 ">({Add})</p>}
    
      <p className="group relative w-full flex justify-center mt-12">
        <button type=""
        className="py-2 px-4 border border-transparent sm:text-sm text-xs tracking-widest font-medium text-white hover:bg-blue-custom-2 bg-green-custom-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-custom-3">
          Check-in
      </button>
      <button type=""
        className="ml-12 py-2 px-4 border border-transparent sm:text-sm text-xs tracking-widest font-medium text-white hover:bg-blue-custom-2 bg-green-custom-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-custom-3">
           Check-out
      </button>
      </p>


    </div>
  );
}

export default Address;