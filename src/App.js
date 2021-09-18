import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Attendance from "./Pages/Attendance/attendance"; //attendance
import Login from "./Pages/Login/login"; //login page
import NotFound from "./Pages/404/404"; //404 not found

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/dashboard" component={Attendance} />
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
};

export default App;
