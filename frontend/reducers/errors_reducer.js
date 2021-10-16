import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import reservationErrorsReducer from "./reservation_errors_reducers";
import listingErrorsReducer from "./listings_error_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  listing: listingErrorsReducer,
  reservation: reservationErrorsReducer
});

export default errorsReducer;
