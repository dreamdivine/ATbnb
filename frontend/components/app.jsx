import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute } from "../util/route_util";
import Splash from "./splash/splash";

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
    <Route extact path="/" component={Splash}/>
    <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;
