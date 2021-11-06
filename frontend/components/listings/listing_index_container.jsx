import { connect } from "react-redux";
import ListingIndex from "./listing_index";
import SanJoseIndex from "../sanjose/sanjose_index";
import OaklandIndex from "../oakland/oakland_index";
import SantaBarbaraIndex from "../santabarbara/santabarbara_index";
import SacramentoIndex from "../sacramento/sacramento_index";
import MammothLakesIndex from "../mammothLakes/mammothlakes_index";
import {
  fetchListing,
  fetchListings,
  deleteListing,
} from "../../actions/listing_actions";
import { clearFilters, updateFilter } from "../../actions/filter_actions";

const mSTP = (state) => {
  return {
    listings: Object.values(state.entities.listings),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

// export default connect(mSTP, mDTP)(ListingIndex);
export default {
  ListingIndexContainer: connect(mSTP, mDTP)(ListingIndex),
  SanJoseIndexContainer: connect(mSTP, mDTP)(SanJoseIndex),
  OaklandIndexContainer: connect(mSTP, mDTP)(OaklandIndex),
  SantaBarbaraIndexContainer: connect(mSTP, mDTP)(SantaBarbaraIndex),
  SacramentoIndexContainer: connect(mSTP, mDTP)(SacramentoIndex),
  MammothLakesIndexContainer: connect(mSTP, mDTP)(MammothLakesIndex),
  // SouthLakeTahoeIndexContainer: connect(mSTP, mDTP)(SouthLakeTahoeIndex),
  // BerkeleyIndexContainer: connect(mSTP, mDTP)(BerkeleyIndex)

};