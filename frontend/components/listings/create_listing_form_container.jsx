import React from "react";
import {connect} from "react-redux";
import ListingForm from "./listing_form";
import {createListing} from "../../actions/listing_actions";
import {clearErrors} from "../../actions/session_actions";
import {openModal} from "../../actions/modal_actions";
import{login} from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
  return {
    listing: {
      description: "",
      guests: "",
      bedroom: "",
      bathroom: "",
      location: "",
      price: "",
      title: "",
      latitude: "",
      longitude: "",
      city: "",
      owner_Id: state.session.id,
      photoFile: null,
    },
    listingFormType: "Create Listing",
    errors: state.errors.listing,
    currentUser: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    action: (listing) => dispatch(createListing(listing)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (e) => dispatch(openModal(e)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mSTP, mDTP)(ListingForm);


