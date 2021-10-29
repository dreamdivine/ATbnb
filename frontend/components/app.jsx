import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";
import Homepage from "./home_page/homepage";
import SanFrancisco from "../components/sanfrancisco/sanfrancisco";
import Host from "../components/host/host";

import ListingIndexContainer from "./listings/listing_index_container";
import ListingShowContainer from "./listings/listing_show_container";
import EditListingFormContainer from "./listings/edit_listing_form_container";
import Trips from "./trips/trips";

// import RoutingError from "./errors/routing_errors";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
    </header>
    <Switch>
    <Route exact path="/" component={Homepage} />
    {/* <Route exact path="/" component={ListingIndexContainer} /> */}
    <Route path="/trips" component={Trips} />
    <Route path="/sanfrancisco" component={SanFrancisco} />
    <Route
      path="/listings/:listingId/edit"
      component={EditListingFormContainer}
    />
    <Route exact path="/listings/:listingId" component={ListingShowContainer} />
    <Route exact path="/host" component={Host} />
    <Route exact path="/listings" component={ListingIndexContainer} />
    <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
  </div>
);

export default App;
