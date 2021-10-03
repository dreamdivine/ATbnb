import { connect } from "react-redux";
import ListingShow from "./listing_show";
import { fetchListing } from "../../actions/listing_actions";

/*
Export a container component for the `PostShow` that maps in the appropriate
post from the store as a `post` prop. Additionally, it should map in
a function that will dispatch `fetchPost` to the store as a prop of the same
name.
*/

const mSTP = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  };
};

export default connect(mSTP, mDTP)(ListingShow);
