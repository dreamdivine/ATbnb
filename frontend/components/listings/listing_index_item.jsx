import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const ListingIndexItem = ({ listing, deleteListing }) => {

  return (
    <div className="listing-index">
        <Link className="images-link" to={`/listings/${listing.id}`}>
          <img src={listing.photoUrl} className="listing-images-index" />
          <div className="listing-all-city">{listing.city}, CA</div>
          <div className="listing-all-price">{listing.price}/night</div>
        </Link>
    </div>
  );
}

export default withRouter(ListingIndexItem);
