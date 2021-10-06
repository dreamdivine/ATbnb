import {
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION,
} from "../actions/reservation_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return {...oldState, ...action.reservations};
    case RECEIVE_RESERVATION:
      newState[action.reservation.id] = action.reservation;
      return newState;
    case REMOVE_RESERVATION:
      delete newState[action.reservationId];
      return newState;
    case RECEIVE_CURRENT_USER:
      return action.currentUser.reservations || {};
    default:
      return state;
  }
};

export default reservationsReducer;
