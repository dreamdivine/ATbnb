import { connect } from "react-redux";
import ListingShow from "./listing_show";
import {updateListing, fetchListings, deleteListing, fetchListing } from "../../actions/listing_actions";


/*
Export a container component for the `PostShow` that maps in the appropriate
post from the store as a `post` prop. Additionally, it should map in
a function that will dispatch `fetchPost` to the store as a prop of the same
name.
*/

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
