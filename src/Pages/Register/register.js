import React, { Component, useState }  from "react";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Swal from 'sweetalert2';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      email: "",
      password: "",
      confirm_password:"",
      error: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    const SignUp = {
      full_name: this.state.full_name,
      email: this.state.email,
      password: this.state.password,
    };
  
    if (this.state.password !== this.state.confirm_password) {
      Swal.fire(
        'Confirm Password Wrong',
        'It is not match!',
        'error'
      );
    } 
    else {
    fetch("https://ipe8-worker-attendance-be.herokuapp.com/api/auth/register", {
      method: "POST",
      headers: { 
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(SignUp),
    })
      .then((res) => {
        return res.json();
      })
      .catch((data) => {
        this.setState({ error: data.message });
      });
    }
  };

  render() {
    return (
      <>
         <div className="min-h-screen  bg-whi-custom-1 grid item-center md:grid-cols-2">
          <div className="bg-blue-custom-1 flex flex-col justify-center">
            <div className="ml-6 md:ml-10 lg:ml-16 text-white  ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">Worker Attendance</h1>
              <h1 className="lg:text-3xl md:text-2xl text-xl">Tracking System</h1>
            </div>
          </div>
        <div className="mt-6 mx-6 md:mx-10 lg:mx-32 flex flex-col justify-center text-2xl font-bold text-lg">
            <div className="text-xl mb-4 flex items-end font-bold text-black-custom-1">Create an account</div>
          <div  className="p-5 bg-blue-custom-3">
          <form onSubmit={this.handleSubmit}
          className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            {this.state.error !== null && <p className="text-sm text-right text-blue-custom-2">{this.state.error}</p>}
            <div>
            <div className="rounded-md -space-y-px">
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none bg-whi-custom-1 relative block w-full px-3 py-2 placeholder-blue-custom-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                  placeholder="Full Name"
                  value={this.state.full_name}
                  onChange={(event) => this.handleChange(event, "full_name")}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none bg-whi-custom-1 relative block w-full px-3 py-2 placeholder-blue-custom-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event, "email")}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  minLength={5}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative bg-whi-custom-1 block w-full px-3 py-2 placeholder-blue-custom-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event, "password")}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="confirm_password" className="sr-only">
                  Password
                </label>
                <input
                  name="confirm_password"
                  type="password"
                  minLength={5}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative bg-whi-custom-1 block w-full px-3 py-2 placeholder-blue-custom-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                  placeholder="Confirm Password"
                  value={this.state.confirm_password}
                  onChange={(event) => this.handleChange(event, "confirm_password")}
                />
              </div>
            </div>
            <div>
            
              <button
                type="submit"
                className="mt-12 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white hover:bg-blue-custom-2 bg-green-custom-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-custom-3"
              >
                Sign up
              </button>
            </div>
          </form>
          </div>

         <div className="text-sm">
            <p className="mt-1 font-medium text-gray-800">
            Already have an account? {' '}
              <a className="font-medium hover:text-blue-custom-2 text-green-custom-3">
                <Link to="/">
                  Sign in
                </Link>
              </a>
            </p>
         </div>
        </div>
        
      </div>     
      </>
    );
  }
}

export default Register;
