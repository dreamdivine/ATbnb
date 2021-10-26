import { connect } from "react-redux";
import ReservationForm from "../reservations/reservation_form";
import {
  createReservation,
  clearErrors,
} from "../../actions/reservation_actions"; 
import{
  fetchListings, fetchListing
} from "../../actions/listing_actions";


const mSTP = (state, ownProps) => {
  console.log(state);
  console.log(state.session.id)
  console.log("i am here the state");
  return {
    reservation: {
      check_in_date: "",
      check_out_date: "",
      number_of_guest: "",
      guest_id: state.session.id,
      listing_id: state.entities.listings[ownProps.match.params.listingId],
    },
    reservationFormType: "Create Reservation",
    errors: state.errors.reservation
  };
};

const mDTP = (dispatch) => {
  return {
    action: (reservation) => dispatch(createReservation(reservation)),
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    clearErrors: () => dispatch(clearErrors()),
  };
}

export default connect(mSTP, mDTP)(ReservationForm);


