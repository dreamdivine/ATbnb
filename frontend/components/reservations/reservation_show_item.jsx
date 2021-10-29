import React from "react";
import { Link } from "react-router-dom";

const ReservationIndexItem = ({ reservation, listings, deleteReservation }) => {

  return (
    <div>
      <h2>{reservation.title}</h2>
      <img src={listings[reservation.listing_id].photoUrl} />
      <h1>CHECK IN: {reservation.check_in_date.split("T")[0]}</h1>
      <h1>CHECK OUT: {reservation.check_out_date.split("T")[0]}</h1>
      <h2>Number of Guest: {reservation.number_of_guest}</h2>
      <h2>Price: ${reservation.price}/night</h2>
      <button
        onClick={() =>
          deleteReservation(reservation.id)
            .then(this.props.history.push(`/sanfrancisco`))
        }
      >
        Cancel Reservation
      </button>
      <button
        onClick={() =>
          props.history.push(`listings/${reservation.listing_id}`)
        }
      >
        Go to the listing page
      </button>
    </div>
  );
};

export default ReservationIndexItem;
