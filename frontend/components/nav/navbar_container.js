import { connect } from "react-redux";
import { logout, signup, login } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import Nav from "./navbar";


const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (e) => dispatch(openModal(e)),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(Nav);
