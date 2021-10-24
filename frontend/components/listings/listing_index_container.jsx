import {connect} from "react-redux";
import ListingIndex from "./listing_index";
import {fetchListing, fetchListings, deleteListing} from "../../actions/listing_actions"
import {clearFilters, updateFilter} from "../../actions/filter_actions";



const mSTP = (state) => {
  return {
    listings: Object.values(state.entities.listings)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    // fetchListing: () => dispatch(fetchListing(filter)),
    // deleteListing: (listingId) => dispatch(deleteListing(listingId)),
    // clearFilters: () => dispatch(clearFilters()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(mSTP, mDTP)(ListingIndex);