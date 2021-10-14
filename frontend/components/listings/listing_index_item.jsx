import React from 'react';
import { Link } from "react-router-dom";

const ListingIndexItem = ({ listing, deleteListing }) => {
  return (
    <div className="ListingUpdateDelete">
        <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
        {/* <Link to={`/listings/${listing.id}/edit`}>Edit</Link>
      <button onClick={() => deleteListing(listing.id)}>
        Delete
      </button> */}
    </div>
  );
};

export default ListingIndexItem;