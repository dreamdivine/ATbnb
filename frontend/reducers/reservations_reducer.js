import {
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION,
} from "../actions/reservation_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const reservationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return {...oldState, ...action.reservations};
    case RECEIVE_RESERVATION:
      nextState[action.reservation.id] = action.reservation;
      return nextState;
    case REMOVE_RESERVATION:
      delete nextState[action.reservationId];
      return nextState;
    case RECEIVE_CURRENT_USER:
      return action.currentUser.reservations || {};
    default:
      return oldState;
  }
};
export default reservationsReducer;
