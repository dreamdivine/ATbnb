import { RECEIVE_LISTING_ERRORS } from "../actions/listing_actions";
import { CLEAR_ERRORS } from "../actions/session_actions";

const listingErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default listingErrorsReducer;
