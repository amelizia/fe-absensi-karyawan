import React, {useState}  from "react";
import { Link, useHistory, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Menu = () => {
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
     {/* Side-Menu */}
    <div className="min-h-screen flex flex-row float-left">
        <div className="flex flex-col bg-blue-custom-1 overflow-hidden pr-6"> 
            <div className="font-sans text-white justify-left ml-6 mt-6 mb-6">
                <h1 className="text-2xl font-bold">Worker Attendance</h1>
                <h2 className="text-xl">Tracking System</h2>
            </div>
            <ul className="flex flex-col py-4 ml-6">
            <li>
                <a href="/dashboard" className="cursor-pointer flex items-center h-12 transform active:bg-blue-custom-1 hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    Dashboard
                </a>
            </li>
            <li>
                <a className="cursor-pointer flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/timesheet">
                        Timesheet
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
            </ul>
            <div className="grid row-span-full gap-y-16 ml-6" onClick={logout}>
                <a className="cursor-pointer row-start-6 row-end-7 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                        Sign out</a>
            </div>
        </div>
    </div>
  </div>
)
};

export default Menu;