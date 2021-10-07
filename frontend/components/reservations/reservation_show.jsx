import React from "react";
import { withRouter } from "react-router-dom";


class ReservationShow extends React.Component {
  componentDidMount() {
    // this.props.fetchReservation(this.props.match.params.reservationId);
    this.props.fetchListings()
  }
  render() {
    return (
      <div>
        <div>
          {this.props.reservations.map((reservation, i) => (
            <div key={i}>
              <img src={this.props.listings[reservation.listing_id]}></img>
              <h1>Reservation: {reservation.check_in_date}</h1>
              <h1>Reservation: {reservation.check_out_date}</h1>
              <h2>Number of Guest: {reservation.number_of_guest}</h2>
              <h2>Price: {this.props.listings[listing_id].price}</h2>
              <button onClick={() => this.props.deleteReservation(reservation.id)}Cancel Reservation></button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ReservationShow);

