import React from 'react';
import { Link } from 'react-router-dom';

const Attendance = () => (
    <div className="content">
    <div className="min-h-screen flex flex-row float-left">
        <div className="flex flex-col bg-blue-custom-1 overflow-hidden pr-6">
            <div className="font-sans text-white justify-left ml-6 mt-6 mb-6">
                <h1 className="text-2xl font-bold text-lg">Worker Attendence</h1>
                <h2 className="text-xl">Tracking System</h2>
            </div>
            <ul className="flex flex-col py-4 ml-6">
            <li>
                <a className="flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/">
                        Dashboard
                    </Link>
                </a>
            </li>
            <li>
                <a className="flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/">
                        Timesheet
                    </Link>
                </a>
            </li>
            <li>
                <a className="flex items-center h-12 transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                    <Link to="/">
                        Administration
                    </Link>
                </a>
            </li>
            </ul>
            <div className="flex flex-col content-end ml-6 mt-80">
                <a className="flex items-center transform hover:translate-x-3 hover:scale-110 transition-transform ease-in-out duration-200 text-white hover:text-orange-custom-1">
                <Link to="/">
                        Sign out
                    </Link>
                    </a>
            </div>
        </div>
    </div>
    <div className="flex flex-col h-screen bg-whi-custom-1 ">
        <div className="mt-6 ml-6 text-2xl font-bold text-lg"> 
        <h1>Dashboard</h1>
        <h1>
          {new Date()
            .toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric"
            })
            .replace(/ /g, " ")}
        </h1>
        </div>
    </div>
  </div>
);

export default Attendance;