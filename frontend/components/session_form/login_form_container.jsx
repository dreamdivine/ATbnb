import { connect } from "react-redux";
import React from "react";
import { login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
    ),
    loginDemoUser: () => dispatch(login({username: "demoUser", password: "demoUser"})),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
