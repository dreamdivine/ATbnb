import { UPDATE_FILTER, CLEAR_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
  minGuest: 1,
  maxGuest: 10,
  city: "Oakland",
});

const filtersReducer = (oldState = defaultFilters, action) => {
  Object.freeze(oldState);

  switch(action.type){
    case UPDATE_FILTER:
    const newFilter = {
      [action.filter]: action.value,
    }
    return Object.assign({}, oldState, newFilter);
    case CLEAR_FILTER:
      return {}
    default:
    return oldState;
  }
};

export default filtersReducer;
