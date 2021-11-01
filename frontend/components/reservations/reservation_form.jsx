import React from "react";
import { withRouter } from "react-router";


class ReservationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.reservation;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reservation = this.reservation.bind(this);
    this.newState = Object.assign({}, this.props.reservation);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchReservation(this.props.match.params.reservationId);
  }

  refreshPage() {
    window.location.reload(false);
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
        .then(this.refreshPage)
        .then(this.props.history.push("/trips"));

      this.setState(this.newState);
    } else {
      this.props.openModal("login");
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error ${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div>
        {/* <div className="session-errors">{this.renderErrors()}</div> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            CHECK-IN
            <input
            required
              type="date"
              value={this.state.check_in_date}
              onChange={(e) => this.reservation(e, "check_in_date")}
            />
          </label>
          <label>
            CHECK-OUT
            <input
            required
              type="date"
              value={this.state.check_out_date}
              onChange={(e) => this.reservation(e, "check_out_date")}
            />
          </label>
          <label>
            Guests
            <input
            required
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

