import { connect } from "react-redux";
import ListingShow from "./listing_show";
import {updateListing, fetchListings, deleteListing, fetchListing } from "../../actions/listing_actions";


const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    listing: state.entities.listings[ownProps.match.params.listingId],
    listingId: ownProps.match.params.listingId
  };
};

const mDTP = (dispatch) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId)),
    updateListing: (listing) => dispatch(updateListing(listing))
  };
};

export default connect(mSTP, mDTP)(ListingShow);
