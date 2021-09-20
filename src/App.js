import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Attendance from "./Pages/Attendance/attendance"; //attendance
import Timesheet from "./Pages/Timesheet/timesheet"; //timesheet page
import Login from "./Pages/Login/login"; //login page
import NotFound from "./Pages/404/404"; //404 not found
import Mapss from "./Pages/Components/maps";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/dashboard" component={Attendance} />
      <Route exact path="/" component={Login} />
      <Route exact path="/maps" component={Mapss} />
      <Route exact path="/timesheets" component={Timesheet} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
};

export default App;
