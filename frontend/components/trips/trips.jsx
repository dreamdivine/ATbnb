import React from "react";
import NavBarCity from "../navbar_city/navbar_city";
import Reservation from "../reservations/create_reservation_container";


const Trips = () => {
  return (
    <div className="bkg-SF">
      <div className="nav-city">
        <NavBarCity />
      </div>
      <div className="reservation-trips">
        <Reservation/>
      </div>
    </div>
  );
};

export default Trips;
