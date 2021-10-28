import React from "react";
import { withRouter } from "react-router-dom";

class ReservationShow extends React.Component {
 
  componentDidMount() {
    // this.props.fetchReservation(this.props.match.params.reservationId);
    this.props.fetchReservations();
  }
  render() {
    const {listings} = this.props;
    return (
      <div>
        {this.props.currentUserReservation.map((reservation, i) => (
          <div key={i}>
            <h2>{reservation.title}</h2>
            <h1>CHECK IN: {reservation.check_in_date}</h1>
            <h1>CHECK OUT: {reservation.check_out_date}</h1>
            <h2>Number of Guest: {reservation.number_of_guest}</h2>
            <h2>Price: {reservation.price}</h2>
            <button
              onClick={() =>
                this.props
                  .deleteReservation(reservation.id)
                  .then(this.props.history.push(`/sanfrancisco`))
              }
            >
              Cancel Reservation
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(ReservationShow);
