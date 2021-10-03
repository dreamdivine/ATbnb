import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Homepage from "./home_page/homepage";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import ListingIndexContainer from "./listings/listing_index_container";
import ListingShowContainer from "./listings/listing_show_container";
import EditListingFormContainer from "./listings/edit_listing_form_container";
import Host from "./pages/host"


// import RoutingError from "./errors/routing_errors";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
     
    </header>
    {/* <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    <Route exact path="/listings/:listingId" component={ListingShowContainer} />
    <Route path="/host_your_home" exact component={Host}/>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/" component={ListingIndexContainer} /> */}

    {/* <Redirect component={RoutingError} /> */}

    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route
      path="/listings/:listingId/edit"
      component={EditListingFormContainer}
    />
    <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    <Route exact path="/" component={Homepage} />
    <Route exact path="/" component={ListingIndexContainer} />
    <Route exact path="/listings/:listingId" component={ListingShowContainer} />
  </div>
);

export default App;
