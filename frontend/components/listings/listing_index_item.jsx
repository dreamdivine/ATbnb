import React from "react";
import { Link } from "react-router-dom";

const ListingIndexItem = ({ listing, deleteListing }) => {
  return (
    <div className="show-city-listing">
      <div>
        <Link className="image-link" to={`/listings/${listing.id}`}>
          <img src={listing.photoUrl} className="listing-city-images" />
        </Link>
      </div>
      <Link className="listing-city-detail" to={`/listings/${listing.id}`}>
        <p className="rental-sf">Entire rental until in San Francisco</p>
        <div className="listing-city-title">{listing.title}</div>
        <div className="line-after-title"></div>
        <div className="listing-city-guests">
          {listing.guests} guests . {listing.bedroom} bed . {listing.bathroom}{" "}
          bath
        </div>
        <div className="listing-city-description">
          Wifi.Kitchen.Washer.Dryer
        </div>
        <div className="review-price">
          <div className="listing-city-review">Reviews</div>
          <div className="listing-price-night">
            <div className="listing-price">${listing.price}</div>
            <div className="night">/ night</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListingIndexItem;
