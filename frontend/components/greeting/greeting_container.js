import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities }) => {
  return {currentUser: entities.users[session.id]
}};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
