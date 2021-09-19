import React from 'react';
import Menu from 'ln -s ../../../src/Components/menu';
import Profile from 'ln -s ../../../src/Components/welcomeprofile';

const Timesheet = () => {
    return (
        <div className="content">
            {/* Layout for side menu */}
            <div>
                <Menu />
            </div>
        {/* Layout for Dashboard */}
        <div className="flex flex-col h-screen bg-whi-custom-1 ">
            <div className="mt-6 ml-6 text-2xl font-bold"> 
            <h1 className="text-2xl mb-6">
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
            <h1 className="text-xl mb-4"> User’s Timesheets </h1>
            </div>
        </div>
      </div>
      
    );
  };

export default Timesheet;