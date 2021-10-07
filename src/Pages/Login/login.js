import React, { Component, useState }  from "react";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Cookies from "js-cookie";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: "",
      password: "",
      error: null,
      role_id:""
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

    const SignIn = {
      email: this.state.email,
      password: this.state.password,
    };

    fetch("https://ipe8-worker-attendance-be.herokuapp.com/api/auth/login", {
      method: "POST",
      // mode:"no-cors",
      headers: { 
        'Content-type': 'application/json; charset=UTF-8',
        // 'Access-Control-Allow-Origin':'*', 
      },
      body: JSON.stringify(SignIn),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if(data.status === 400, 404, 500) {
          throw Error(data.message);
        }
        else {
          this.setState({
            data,
            role_id: data.data.role_id,
          });

          localStorage.setItem("role_id", data.data.role_id);

          const role_id = localStorage.getItem("role_id");
          if (role_id === "Employee") {
            Router.push("/dashboard");
          }
          else if (role_id === "Admin") {
            Router.push("/admin");
          }
        }
      })
      .catch((data) => {
        this.setState({ error: data.message });
      });
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
            <div className="text-xl mb-4 flex items-end font-bold text-black-custom-1">Great to see you again!
          </div>
          <div  className="p-5 bg-blue-custom-3">
          <form onSubmit={this.handleSubmit} 
          className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            {this.state.error !== null && <p className="text-sm text-right text-blue-custom-2">{this.state.error}</p>}
            <div>
              <div className="rounded-md -space-y-px">
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
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative bg-whi-custom-1 block w-full px-3 py-2 placeholder-blue-custom-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event, "password")}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-12 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white hover:bg-blue-custom-2 bg-green-custom-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-custom-3">
                Sign in
              </button>
            </div>
          </form>
          </div>

         <div className="text-sm">
         < a className = "font-medium hover:text-blue-custom-2 text-green-custom-3" >
            <Link to="/forgot-password">
            Forgot password?
                </Link>
         </a>

           <p className="mt-1 font-medium text-gray-800">
            Don’t have an account? {' '}
              <a className="font-medium hover:text-blue-custom-2 text-green-custom-3">
                <Link to="/register">
                  Sign up
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

export default Login;
