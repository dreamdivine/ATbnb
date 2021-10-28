import React from "react";
import { withRouter } from "react-router";


class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reservation;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reservation = this.reservation.bind(this);
    this.newState = Object.assign({}, this.props.reservation)
  }

  componentDidMount() {
    this.props.fetchReservation(this.props.match.params.reservationId);
  }

  reservation(e, field) {
    this.setState({ [field]: e.target.value });
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            CHECK-IN
            <input
              type="date"
              value={this.state.check_in_date}
              onChange={(e) => this.reservation(e, "check_in_date")}
            />
          </label>
          <label>
            CHECK-OUT
            <input
              type="date"
              value={this.state.check_out_date}
              onChange={(e) => this.reservation(e, "check_out_date")}
            />
          </label>
          <label>
            Guests
            <input
              type="number"
              value={this.state.number_of_guest}
              onChange={(e) => this.reservation(e, "number_of_guest")}
            />
          </label>
          <button>Create Reservation</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ReservationForm);

