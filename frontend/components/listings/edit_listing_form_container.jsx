import React from "react";
import { connect } from "react-redux";
import ListingForm from "./listing_form";
import { fetchListing, updateListing } from "../../actions/listing_actions";


class EditListingForm extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }
  render() {
    const { action, listingFormType, listing } = this.props;

    if (!listing) return null;
    return <ListingForm action={action} listingFormType={listingFormType} listing={listing} />;
  }
}

const mSTP = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
    listingFormType: "update Listing"
  };
};

const mDTP = (dispatch) => {
  return {
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    action: (listingFormData, listing) => dispatch(updateListing(listingFormData, listing)),
  };
};

export default connect(mSTP, mDTP)(EditListingForm);