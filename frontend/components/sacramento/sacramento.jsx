import React from "react";
import Component from "../listings/listing_index_container";
import { Link } from "react-router-dom";
import NavBarCity from "../navbar_city/navbar_city";

const Sacramento = () => {
  return (
    <div className="bkg-SF">
      <div className="nav-city">
        <NavBarCity />
      </div>
      <div className="left-city-page">
        <Component.SacramentoIndexContainer />
      </div>
    </div>
  );
};

export default Sacramento;
