import React, { Component, useState }  from "react";
import { Link, useHistory, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from "js-cookie";

const Navbar = () => {
    const History = useHistory();
    
    const logout = (e) => {
        e.preventDefault();
    
        fetch("API_URLbuatlogout", {
            method: "POST",
            headers: { "Content-Type": "application/json", 
            Authorization: Cookies.get("jwt") 
          },
          }).then(() => {
            Cookies.remove("jwt");
            localStorage.removeItem("role_id");
            History.push("/");
          });
      };

return (
    <div className="content">
     {/* Side-Menu */}
    <div className=" min-h-screen flex flex-row float-left">
        <div className="flex flex-col bg-blue-custom-1 overflow-hidden md:pr-6 pr-2"> 
            <div className="font-sans text-white justify-left ml-6 mt-6 mb-6">
                <h1 className="2xl:text-4xl lg:text-2xl md:text-lg text-base font-bold">Worker Attendance</h1>
                <h2 className="2xl:text-3xl lg:text-xl md:text-base text-sm">Tracking System</h2>
            </div>
            <ul className="flex flex-col py-4 ml-6 2xl:text-xl lg:text-base text-sm">
            <li>
                <a href="/dashboard" className="cursor-pointer flex items-center h-12 transform active:bg-blue-custom-1 hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    Dashboard
                </a>
            </li>
            <li>
                <h1 className="cursor-pointer flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/timesheets">
                        Timesheets
                    </Link>
                </h1>
            </li>
            <li>
                <h1 className="cursor-pointer flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/administration">
                        Administration
                    </Link>
                </h1>
            </li>
            </ul>
            <div className="h-full flex flex-col justify-end ml-6 mb-5 2xl:text-xl lg:text-base text-sm">
                <h1 onClick={logout} className="cursor-pointer row-start-6 row-end-7 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                        Sign out</h1>
            </div>
        </div>
    </div>
  </div>
)
};

export default Navbar;