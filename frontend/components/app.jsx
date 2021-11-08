import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";
import Homepage from "./home_page/homepage";
import SanFrancisco from "../components/sanfrancisco/sanfrancisco";
import AllCity from "../components/listings/listing";
import Host from "../components/host/host";
import SanJose from "./sanjose/sanjose";
import Oakland from "./oakland/oakland";
import SantaBarbara from "./santabarbara/santabarbara";
import Sacramento from "./sacramento/sacramento";
import MammothLakes from "./mammothLakes/mammothlakes";
import LakeTahoe from "./southlaketahoe/laketahoe";
import Berkeley from "./berkeley/berkeley";
import Component from "./listings/listing_index_container";
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
      <Route path="/all-city" component={AllCity} />
      <Route path="/sanfrancisco" component={SanFrancisco} />
      <Route path="/sanjose" component={SanJose} />
      <Route path="/oakland" component={Oakland} />
      <Route path="/santa-barbara" component={SantaBarbara} />
      <Route path="/sacramento" component={Sacramento} />
      <Route path="/mammoth-lake" component={MammothLakes} />
      <Route path="/lake-tahoe" component={LakeTahoe} />
      <Route path="/berkeley" component={Berkeley} />
      <Route
        path="/listings/:listingId/edit"
        component={EditListingFormContainer}
      />
      <Route
        exact
        path="/listings/:listingId"
        component={ListingShowContainer}
      />
      <Route exact path="/host" component={Host} />
      <Route
        exact
        path="/listings"
        component={Component.ListingIndexContainer}
      />
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
  </div>
);

export default App;
