import {connect} from "react-redux";
import ListingIndex from "./listing_index";
import {fetchListing, fetchListings, deleteListing} from "../../actions/listing_actions"
import {clearFilters, updateFilter} from "../../actions/filter_actions";



const mSTP = (state) => {
  return {
    listings: Object.values(state.entities.listings),
    // minGuest: state.ui.filters.minGuest,
    // maxGuest: state.ui.filters.maxGuest,
    // filter: state.ui.filters.city,
    // changeMap: {
    //   "San Francisco": { coords: [37.774, -122.4194], zoom: 13 },
    //   "Oakland": { coords: [37.8044, -122.2712], zoom: 13 },
    //   "San Jose": { coords: [37.3382, -121.8863], zoom: 13 },
    //   "South Lake Tahoe": { coords: [38.9399, -119.9772], zoom: 13 },
    //   "Berkeley": { coords: [37.8715, -122.2730], zoom: 13 },
    //   "Sacramento": { coords: [38.5816, -121.4944], zoom: 13 },
    //   "Mammoth Lakes": {coords: [37.6485, -118.9721], zoom:13 }
    // },
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