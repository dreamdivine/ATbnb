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
      <div className="reservation-create">
        {/* <div className="session-errors">{this.renderErrors()}</div> */}
        <div className="reservation-price-review">
          <div>${this.props.listing.price}/night</div>
          <div className="star-review-length">
            <i className="fas fa-star" id="star"></i>
            <div className="average-rating">
              {this.props.listing.average_rating}
            </div>
            <div className="review-length">
              {this.props.listing.reviews === undefined
                ? "0 reviews"
                : "(" +
                  Object.values(this.props.listing.reviews).length +
                  " reviews)"}
            </div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="reservation-form">
            <div className="check-guest">
            <div className="check-in-out">
              <div className="check-in-add">
                <label>
                  <p className="checkin">CHECK-IN</p>
                  <p className="add-date">Add date</p>
                  <input
                    required
                    type="date"
                    value={this.state.check_in_date}
                    onChange={(e) => this.reservation(e, "check_in_date")}
                  />
                </label>
              </div>
              <div className="check-out-add">
                <label>
                  <p className="checkout">CHECK-OUT</p>
                  <p className="add-date">Add date</p>
                  <input
                    required
                    type="date"
                    value={this.state.check_out_date}
                    onChange={(e) => this.reservation(e, "check_out_date")}
                  />
                </label>
              </div>
            </div>
            <div>
              <div className="guest-show">
              <label>
                <div className="guest-input">
                Guests
                <input
                  required
                  type="number"
                  value={this.state.number_of_guest}
                  onChange={(e) => this.reservation(e, "number_of_guest")}
                />
                </div>
              </label>
              </div>
            </div>
            </div>
            <div className="reservation-btn">
            <button className="create-btn">Create Reservation</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ReservationForm);

