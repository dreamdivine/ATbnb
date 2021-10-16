import React from "react";
import CreateListingFormContainer from "../listings/create_listing_form_container";
import { Link } from "react-router-dom";

const Host = () => {
  return (
    <div className="bkg-host">
      <Link to="/">
        <i className="fab fa-airbnb" id="airbnb"></i>
        <p>AT bnb</p>
      </Link>
      <CreateListingFormContainer />
    </div>
  );
};

export default Host;
