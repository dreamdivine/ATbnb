import { connect } from "react-redux";
import ListingShow from "./listing_show";
import {updateListing, fetchListings, deleteListing, fetchListing, deleteReview} from "../../actions/listing_actions";



const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    listing: state.entities.listings[ownProps.match.params.listingId],
    listingId: ownProps.match.params.listingId,
    currentUserName: state.entities.users[state.session.id].username,
    users: state.entities.users
  };
};

const mDTP = (dispatch) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId)),
    updateListing: (listing) => dispatch(updateListing(listing)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
  };
};

export default connect(mSTP, mDTP)(ListingShow);
