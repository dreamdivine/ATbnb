import { connect } from "react-redux";
import ReservationForm from "../reservations/reservation_form";
import {
  createReservation,
  fetchReservations,
  fetchReservation,
  deleteReservation,
  clearErrors,
} from "../../actions/reservation_actions"; 
import{
  fetchListings, fetchListing
} from "../../actions/listing_actions";
import{openModal} from "../../actions/modal_actions";
import{login} from "../../actions/session_actions";


const mSTP = (state, ownProps) => {
  return {
    reservation: {
      check_in_date: "",
      check_out_date: "",
      number_of_guest: "",
      guest_id: state.session.id,
      listing_id: ownProps.listingId
    },
    reservationFormType: "Create Reservation",
    currentUser: state.session.id,
    errors: state.errors.reservation,
  };
};

const mDTP = (dispatch) => {
  return {
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    fetchReservations: () => dispatch(fetchReservations()),
    fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)), 
    clearErrors: () => dispatch(clearErrors()),
    openModal: (e) => dispatch(openModal(e)),
    login: (user) => dispatch(login(user))
  };
}

export default connect(mSTP, mDTP)(ReservationForm);


