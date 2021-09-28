import React, { Component } from 'react';

// const Profile = () => {
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: []
    };
  }

componentDidMount(){
    console.log('Component Mounted')
  fetch('https://ipe8-worker-attendance-be.herokuapp.com/api/dashboard', {
     // fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'GET',
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'default', 
        credentials: 'same-origin', 
        redirect: 'follow', 
        referrerPolicy: 'same-origin', 
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin':'*' ,
        },
      })
      // .then(response => response.json())
      // .then(data => this.setState({ data }))
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
render(){
    console.log('Render Method Called')
    const {data} = this.state;

    return (
        <div className="content">
                {data.map((profile)=>(
                   <div key={profile.id}>
                    <h1 className="2xl:text-2xl md:text-xl text-lg font-bold"> Hello, {profile.full_name}</h1>
                    <h1 className="2xl:text-xl md:text-lg text-base font-semibold"> Role: {profile.role_description}</h1>
                    <h1 className="2xl:text-xl md:text-lg text-base font-semibold"> Office Location: HQ Jakarta {profile.office_longitude},{profile.office_latitude} </h1>
                   </div>
                ))}
            {/* <div> 
            <h1 className="2xl:text-2xl md:text-xl text-lg font-bold"> Hello, John Doe </h1>
            <h1 className="2xl:text-xl md:text-lg text-base font-semibold"> Role: Supervisor</h1>
            <h1 className="2xl:text-xl md:text-lg text-base font-semibold"> Office Location: HQ Jakarta</h1>
            </div> */}
        </div>
      
    )
}

}

export default Profile;