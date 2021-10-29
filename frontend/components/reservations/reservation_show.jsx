import React from "react";
import { withRouter } from "react-router-dom";
// import ReservationIndexItem from "./reservation_show_item"

class ReservationShow extends React.Component {
 
  componentDidMount() {
    this.props.fetchListings();
  }
  render() {
    return (
      <div>
        {this.props.currentUserReservation.map((reservation, i) => (
          <div key={i}>
            <img src={this.props.listings[reservation.listing_id].photoUrl} />
            <h2>{reservation.title}</h2>
            <h1>CHECK IN: {reservation.check_in_date.split("T")[0]}</h1>
            <h1>CHECK OUT: {reservation.check_out_date.split("T")[0]}</h1>
            <h2>Number of Guest: {reservation.number_of_guest}</h2>
            <h2>Price: ${reservation.price}/night</h2>
            <button
              onClick={() =>
                this.props
                  .deleteReservation(reservation.id)
                  .then(this.props.history.push(`/sanfrancisco`))
              }
            >
              Cancel Reservation
            </button>
            <button
              onClick={() =>
                this.props.history.push(`listings/${reservation.listing_id}`)
              }
            >
              Go to the listing page
            </button>
          </div>
          // <ReservationIndexItem
          //   reservation={reservation}
          //   listings={this.props.listings}
          //   deleteReservation={this.props.deleteReservation}
          //   key={i}
          // />
        ))}
      </div>
    );
  }
}

export default withRouter(ReservationShow);
