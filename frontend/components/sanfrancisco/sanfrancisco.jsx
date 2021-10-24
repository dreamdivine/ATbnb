import React from 'react';
import ListingIndexContainer from "../listings/listing_index_container";
import { Link } from 'react-router-dom';



const SanFrancisco = () => {
    return (
      <div className="bkg-SF">
        <Link to="/">
          <i className="fab fa-airbnb" id="airbnb"></i>
          <p>AT bnb</p>
        </Link>
        <ListingIndexContainer />
      </div>
    );
}

export default SanFrancisco;


