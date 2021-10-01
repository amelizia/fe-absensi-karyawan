import React, {useState}  from "react";
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [rememberToken, setRememberToken] = useState("");
  const [error, setError] = useState(null);
  const cookies = new Cookies();
  const History = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const SignIn = {
      email,
      password,
    };

    fetch('https://ipe8-worker-attendance-be.herokuapp.com/api/auth/login', {
      method: "POST",
      // mode: 'no-cors',
      headers: { 
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'  },
      body: JSON.stringify(SignIn),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.status === "error") {
        throw Error(data.message);
      } else {
        setError(null);
        if (typeof Storage !== "undefined") {
          localStorage.setItem("logged", "true");
          localStorage.setItem("token", data.token, {
            httpOnly: true,
          });
          Cookies.set("token", data.token);
          localStorage.setItem("rememberToken", data.rememberToken);
          History.push("/dashboard");
        }
      }
    })
    .catch((err) => {
      setError(err.message);
    });
};

    return (
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
          <form onSubmit={handleSubmit} 
          className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            {error !== null && <p className="text-sm text-right text-blue-custom-2">{error}</p>}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  minLength={8}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative bg-whi-custom-1 block w-full px-3 py-2 placeholder-blue-custom-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
            
              <button
                type="submit"
                className="mt-12 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white hover:bg-blue-custom-2 bg-green-custom-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-custom-3"
              >
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
    )
  };

export default Login;