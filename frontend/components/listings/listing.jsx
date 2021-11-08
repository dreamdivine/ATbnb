import React from 'react';
import Component from "../listings/listing_index_container";
import { Link } from 'react-router-dom';
import NavBarCity from '../navbar_city/navbar_city';


const AllCity = () => {
    return (
      <div className="bkg-SF">
        <div className="nav-city">
          <NavBarCity />
        </div>
        <div className="left-city-page">
          <Component.ListingIndexContainer />
        </div>
      </div>
    );
}

export default AllCity;


