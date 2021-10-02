import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Homepage from "./home_page/homepage";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
// import RoutingError from "./errors/routing_errors";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
    </header>
    {/* <Switch> */}
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={Homepage} />
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      {/* <Redirect component={RoutingError} /> */}
    {/* </Switch> */}
  </div>
);

export default App;
