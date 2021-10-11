import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Attendance from "./Pages/Attendance/attendance"; //attendance
import Timesheet from "./Pages/Timesheet/timesheet"; //timesheet page
import Administration from "./Pages/Administration/administration"; //administration page for admin
import Approval from "./Pages/Approval/approval"; //approval page for admin
import Login from "./Pages/Login/login"; //login page
import Register from "./Pages/Register/register"; //signup page
import Forgot from "./Pages/Forgot Password/forgot"; //forgot page
import NotFound from "./Pages/404/404"; //404 not found
import Mapss from "./Components/maps";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/dashboard" component={Attendance} />
      <Route exact path="/" component={Login} />
      <Route exact path="/maps" component={Mapss} />
      <Route exact path="/timesheets" component={Timesheet} />
      <Route exact path="/administration" component={Administration} />
      <Route exact path="/approval" component={Approval} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgot-password" component={Forgot} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
};

export default App;
