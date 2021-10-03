import {connect} from "react-redux";
import ListingIndex from "./listing_index";
import {fetchListings, deleteListing} from "../../actions/listing_actions"


const mSTP = (state) => {
  return {
    listings: Object.values(state.entities.listings)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    deleteListing: (listingId) => dispatch(deleteListing(listingId)),
  }
};

export default connect(mSTP, mDTP)(ListingIndex);