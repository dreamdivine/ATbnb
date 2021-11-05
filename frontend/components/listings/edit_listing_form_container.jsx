import React from "react";
import { connect } from "react-redux";
import ListingForm from "./listing_form";
import { fetchListing, updateListing,  } from "../../actions/listing_actions";
import {clearErrors} from "../../actions/session_actions";
import {openModal} from "../../actions/modal_actions";
import {login} from "../../actions/session_actions";

class EditListingForm extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }
  render() {
    const { action, listingFormType, listing, errors, currentUser } = this.props;

    if (!listing) return null;
    
    return <ListingForm action={action} listingFormType={listingFormType} listing={listing} errors={errors} currentUser={currentUser}/>;
  }
}

const mSTP = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
    listingFormType: "update Listing",
    errors: state.errors.listing,
    currentUser: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    action: (listingFormData, listing) =>
    dispatch(updateListing(listingFormData, listing)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (e) => dispatch(openModal(e)),
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(EditListingForm);