import React from "react";
import { withRouter } from "react-router-dom";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reservation;
    this.newState = Object.assign({}, this.props.reservation);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      if (this.state.check_out_date < this.state.check_in_date) return null;
      const reservations = Object.assign({}, this.state, {
        listing_id: this.props.listingId,
      });
      this.props
        .createReservation(reservations)
        .then(this.props.history.push("/reservations"));
      this.setState(this.newState);
    } else {
      this.props.openModal("login");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Check in date:
          <input type="date" value={this.state.check_in_date} />
        </label>
        <label>
          Check out date:
          <input type="date" value={this.state.check_out_date} />
        </label>
        {/* <label>
          Price:
          <input type="number" value={this.state.listing.price} />
        </label> */}
        <button type="submit">Reserve</button>
      </form>
    );
  }
}

export default withRouter(ReservationForm);
      