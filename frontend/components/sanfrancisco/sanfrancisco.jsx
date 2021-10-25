import React from 'react';
import ListingIndexContainer from "../listings/listing_index_container";
import { Link } from 'react-router-dom';
import NavBarCity from '../navbar_city/navbar_city';


const SanFrancisco = () => {
    return (
      <div className="bkg-SF">
        <div className="nav-city">
          <NavBarCity />
        </div>
        <div className="left-city-page">
          <ListingIndexContainer />
        </div>
      </div>
    );
}

export default SanFrancisco;


