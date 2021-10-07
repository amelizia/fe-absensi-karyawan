import React from 'react';
import Navbar from '../../Components/side-navbar';
import Topbar from '../../Components/top-navbar';
import Admin from '../../Components/adminprofile';
import AttendStamp  from './attendstamp'

const Administration = () => {
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
                <Admin />
            </div>
            <h1 className="2xl:text-2xl md:text-lg mb-4">
            <span>
            {new Date()
                .toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric"
                })
                .replace(/ /g, " ")}
              </span></h1>
            </div>
            <AttendStamp />
        </div>
      </div>
      
    );
  };

export default Administration;