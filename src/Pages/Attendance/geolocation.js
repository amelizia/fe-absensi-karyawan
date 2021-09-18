import React, { useState } from 'react';

  const Geo = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [Tmpstmp, setTmpstmp] = useState (null);
  const [status, setStatus] = useState(null);

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
      }) .replace(/\//g, '-')+ " " + 
      new Date().toLocaleTimeString("en-GB",{}));

      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
    <div className="App">
      <button onClick={getLocation}>Your current location</button>
      <p>{status}</p>
      {lat && <a>{lat.toFixed(7)}</a>}
      {lng && <a>, {lng.toFixed(7)}</a>}
      {Tmpstmp && <p>{Tmpstmp}</p>}
    </div>
  );
}

export default Geo;


