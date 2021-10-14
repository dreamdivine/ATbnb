import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Homepage from "./home_page/homepage";
import ListingIndex from "./listings/listing_index";

// import RoutingError from "./errors/routing_errors";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
    </header>
    {/* <Switch> */}
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      <Route exact path="/" component={Homepage} />
      <Route path="/sanfrancisco" component={ListingIndex} />
    {/* </Switch> */}
  </div>
);

export default App;
