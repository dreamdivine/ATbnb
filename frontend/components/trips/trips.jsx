import React from "react";
import NavBarCity from "../navbar_city/navbar_city";
import ReservationShowContainer from "../reservations/reservation_show_container";


const Trips = () => {
  return (
    <div className="bkg-SF">
      <div className="nav-city">
        <NavBarCity />
      </div>
      <div className="reservation-trips">
        <ReservationShowContainer/>
      </div>
    </div>
  );
};

export default Trips;
