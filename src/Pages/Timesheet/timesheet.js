import React from 'react';
import Navbar from '../../Components/side-navbar';
import Topbar from '../../Components/top-navbar';
import Profile from '../../Components/welcomeprofile';
import TimeStamp from './timestamp'

const Timesheet = () => {
    return (
        <div className="content">
           {/* Layout for side menu */}
           <div className=" md:contents hidden">
                <Navbar />
            </div>
            <div className="sm:contents">
                <Topbar />
            </div>
        {/* Layout for Dashboard */}
        <div className="flex flex-col h-screen bg-whi-custom-1 ">
            <div className="mt-6 ml-6 font-bold"> 
            <h1 className="2xl:text-4xl md:text-2xl text-xl mb-6">
              Timesheets -
            <span> </span>
            <span>
            {new Date()
                .toLocaleDateString("en-GB", {
                month: "long",
                year: "numeric"
                })
                .replace(/ /g, " ")}
              </span></h1>
            {/* Layout for profile */}
            <div className="mb-6">
                <Profile />
            </div>
            <h1 className="2xl:text-4xl md:text-2xl text-lg mb-4"> User’s Timesheets </h1>
            </div>
            <TimeStamp />
        </div>
      </div>
      
    );
  };

export default Timesheet;