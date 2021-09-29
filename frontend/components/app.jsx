import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import Splash from "./splash/splash";
import { ProtectedRoute } from "../util/route_util";
import RoutingError from "./errors/routing_errors";
import Navbar from "./greeting/greeting";

const App = () => (
  <div>
    <Modal />
    <GreetingContainer />
    {/* <Navbar /> */}
    <header>
      <Link to="/" className="header-link">
        {/* <h1>AT bnb</h1> */}
      </Link>
    </header>
    <Switch>
      <Route exact path="/" component={Splash} />
      {/* <ProtectedRoute path="/" component={Splash} /> */}
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      {/* <Redirect component={RoutingError} /> */}
    </Switch>
  </div>
);

export default App;
