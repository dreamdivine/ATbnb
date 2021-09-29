import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import Splash from "./splash/splash";
import { ProtectedRoute } from "../util/route_util";
import RoutingError from "./errors/routing_errors";

const App = () => (
  <div>
    <Modal />
    <GreetingContainer />
    <header>
      <Link to="/" className="header-link">
        <h1>AT bnb</h1>
      </Link>
    </header>
    <Switch>
      <ProtectedRoute path="/" component={Splash} />
      <Redirect component={RoutingError} />
    </Switch>
  </div>
);

export default App;
