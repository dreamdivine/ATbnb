import { fetchListings } from "./listing_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value,
});

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER
  };
}

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchListings(getState().ui.filters)(dispatch);
};

export const clearFilters = () => dispatch => {
  dispatch(clearFilter())
}