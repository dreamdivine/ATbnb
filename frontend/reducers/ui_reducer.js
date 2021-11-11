import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";



const uIReducer = combineReducers({
  modal: modalReducer
});

export default uIReducer;
