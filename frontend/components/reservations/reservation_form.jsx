import React from "react";
import { withRouter } from "react-router";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reservation;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateReservation = this.updateReservation.bind(this);
  }

  updateReservation(e, field) {
    this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {
    return (
      <div>
      {/* <form onSubmit={this.handleSubmit}>
        <label>
          CHECK-IN
          <input
            type="date"
            value={this.state.check_in_date}
            onChange={(e) => this.updateReservation(e, "check_in_date")}
          />
        </label>
        <label>
          CHECK-OUT
          <input
            value={this.state.check_out_date}
            onChange={(e) => this.updateReservation(e, "check_out_date")}
          />
        </label>
        <button>{this.props.formType}</button>
      </form> */}
      Hellooooo!!!!
      </div>
    );
  }
}

export default withRouter(ReservationForm);

