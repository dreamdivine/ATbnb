import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import Splash from "./splash/splash";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import RoutingError from "./errors/routing_errors";
import NavBar from "./navbar/navbar";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";


const App = () => (
  <div>
    <NavBar />
    <Modal />
    <GreetingContainer />

    <header>
      <Link to="/" className="header-link"></Link>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={Splash} />
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      {/* <Redirect component={RoutingError} /> */}
    </Switch>
  </div>
);

export default App;
