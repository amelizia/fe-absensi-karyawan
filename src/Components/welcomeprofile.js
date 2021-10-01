import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: [],
      full_name: "",
      role_description: "",
      office_longitude: 0,
      office_latitude: 0,
    };
  }

componentDidMount(){
    console.log('Component Mounted')
    fetch('https://ipe8-worker-attendance-be.herokuapp.com/api/dashboard', {
        method: 'GET',
        // mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'default', 
        // credentials: 'same-origin', 
        // redirect: 'follow', 
        // referrerPolicy: 'same-origin', 
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin':'*' ,
          'Accept': 'application/json',
        },
      })
      // .then(response => response.json())
      .then(function (response) {
        if (!response.ok) {
           return response.text().then(result => Promise.reject(new Error(result)));
        }
    
        return response.json();
    })
      .then(data => this.setState({ 
        data,
        full_name: data.data.full_name,
        role_description: data.data.role_description,
        office_longitude: data.data.office_longitude,
        office_latitude: data.data.office_latitude,
      }))
      // .then(data => {
      //   console.log('Success:', data);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // })
}
render(){
    console.log('Render Method Called')
    const { full_name, role_description, office_longitude, office_latitude } = this.state;

    return (
        <div className="content">
            <div> 
              <h1 className="2xl:text-2xl md:text-xl text-lg font-bold"> Hello, {full_name} </h1>
              <h1 className="2xl:text-xl md:text-lg text-base font-semibold"> Role: {role_description}</h1>
              <h1 className="2xl:text-xl md:text-lg text-base font-semibold"> Office Location: {office_longitude}, {office_latitude}</h1>
            </div>
        </div>
      
    )
}

}

export default Profile;