import { connect } from "react-redux";
import ListingForm from "./listing_form";
import { createListing } from "../../actions/listing_actions";

const mSTP = (state) => {
  return {
    listing: {
      description: "",
      guests: "",
      picture_url: "",
      bedroom: "",
      bathroom: "",
      location: "",
      price: "",
      title: "",
      latitude: "",
      longitude: "",
      owner_Id: state.session.id,
    },
    listingFormType: "Create Listing",
  };
};

const mDTP = (dispatch) => {
  return {
    action: (listing) => dispatch(createListing(listing)),
  };
};

export default connect(mSTP, mDTP)(ListingForm);

