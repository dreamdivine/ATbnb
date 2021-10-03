import React from 'react';
import { Link } from "react-router-dom";

const ListingIndexItem = ({ listing, deleteListing }) => {
  return (
    <li>
      <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
      <Link to={`/listings/${listing.id}/edit`}>Edit</Link>
      <button onClick={() => deleteListing(listing.id)}></button>
    </li>
  );
};

export default ListingIndexItem;