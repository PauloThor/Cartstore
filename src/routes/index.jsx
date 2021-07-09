import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import HomeClient from "../pages/HomeClient";
import Register from "../pages/Register"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/HomeClient" component={HomeClient} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;