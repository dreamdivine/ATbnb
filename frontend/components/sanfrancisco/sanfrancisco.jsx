import React from 'react';
import ListingIndexContainer from "../listings/listing_index_container";
import { Link } from 'react-router-dom';
import ListingMap from '../listing_map/listing_map';



const SanFrancisco = () => {
    return (
      <div className="bkg-SF">
          <Link to="/">
            <i className="fab fa-airbnb" id="airbnb"></i>
            <p>AT bnb</p>
          </Link> 
          <ListingMap />
        <ListingIndexContainer />
      </div>
    );
}

export default SanFrancisco;


