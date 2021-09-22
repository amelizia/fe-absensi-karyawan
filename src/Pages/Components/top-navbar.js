import React from "react";
import { Link, useHistory, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Topbar = () => {
  const [TopbarOpen, setTopbarOpen] = React.useState(false);
    const History = useHistory();
    
    const logout = (e) => {
      e.preventDefault();
  
      if (typeof Storage !== "undefined") {
        const token = localStorage.getItem("token");
  
        fetch("API_URLbuatlogout", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: token },
        }).then(() => {
          localStorage.removeItem("logged");
          localStorage.removeItem("token");
          localStorage.removeItem("rememberToken");
          History.push("/");
        });
      }
    };

return (
    <div className="content">
         {/* <!-- mobile menu bar --> */}
  <div class="bg-blue-custom-1 text-white flex justify-between md:hidden">
    <a href="#" class="block ml-6 pt-4 text-white font-bold">Worker Attendance</a>
    <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
    type="button"
    onClick={() => setTopbarOpen(!TopbarOpen)}
    >
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
  <div className={
      "md:hidden lg:flex flex-grow items-center  bg-blue-custom-1" +
      (TopbarOpen ? " flex" : " hidden")
    }
    id="example-navbar-danger"
    >
     <ul className="md:hidden flex flex-col py-4 ml-6 2xl:text-xl lg:text-base text-sm">
            <li>
                <a href="/dashboard" className="cursor-pointer flex items-center h-12 transform active:bg-blue-custom-1 hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    Dashboard
                </a>
            </li>
            <li>
                <a className="cursor-pointer flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/timesheets">
                        Timesheets
                    </Link>
                </a>
            </li>
            <li>
                <a href="/" className="cursor-pointer flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/admin">
                        Administration
                    </Link>
                </a>
            </li>
            <li>
                <a onClick={logout} className="cursor-pointer flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                   Sign out
                </a>
            </li>
            </ul>
    </div>
     {/* Side-Menu */}
  </div>
)
};

export default Topbar;