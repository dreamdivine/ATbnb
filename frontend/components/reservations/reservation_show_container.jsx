import { connect } from "react-redux";
import ReservationShow from "./reservation_show";
import {
  deleteReservation,
  fetchReservation,
  fetchReservations,
} from "../../actions/reservation_actions";
import {fetchListings} from "../../actions/listing_actions";


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  reservation: Object.values(state.entities.reservations),
  listings: state.entities.listings
});

const mDTP = (dispatch) => ({
  deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
  fetchReservations: () => dispatch(fetchReservations()),
  fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)),
  fetchListings: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(ReservationShow);


