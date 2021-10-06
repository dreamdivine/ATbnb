import {
  RECEIVE_RESERVATION_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_RESERVATION,
} from "../actions/reservation_actions";
import {RECEIVE_LISTINGS} from "../actions/listing_actions"

const reservationErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      if (action.errors){
      return action.errors;
      }else{
        return []
      }
    case RECEIVE_RESERVATION:
      return [];
    case RECEIVE_LISTINGS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default reservationErrorsReducer;
