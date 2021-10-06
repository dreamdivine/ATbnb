import { connect } from "react-redux";
import ReservationShow from "./reservation_show";
import {
  deleteReservation,
  fetchReservation,
  fetchReservations,
} from "../../actions/reservation_actions";
import { fetchListings} from "../../actions/listing_actions";

const mSTP = (state) => ({
  reservations: Object.values(state.entities.reservations),
  currentUser: state.entities.users[state.session.id],
  listings: state.entities.listings,
});

const mDTP = (dispatch) => ({
  deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
  fetchReservations: () => dispatch(fetchReservations()),
  fetchReservation: (user_id) => dispatch(fetchReservation(user_id)),
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mSTP, mDTP)(ReservationShow);
