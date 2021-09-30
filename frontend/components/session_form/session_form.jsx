import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props
      .processForm(user)
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push("/splash"));
  }

  demoLogin(e) {
    e.preventDefault();
    this.props
      .loginDemoUser()
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push("/splash"));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error ${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    let field;
    if (this.props.formType === "signup") {
      field = (
        <div className="formToFill">
          <input
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder="username"
            className="login-input"
          />
          <br />
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="password"
            className="login-input"
          />
          <br />
          <input
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="email"
            className="login-input"
          />
          <br />
          <input
            id="firstName"
            type="text"
            value={this.state.first_name}
            onChange={this.update("first_name")}
            placeholder="first name"
            className="login-input"
          />
          <br />
          <input
            id="lastName"
            type="text"
            value={this.state.last_name}
            placeholder="last name"
            onChange={this.update("last_name")}
            className="login-input"
          />
          <br />
          <div className="confirmAccount">
            <p>We’ll email you to confirm or verify your account.</p> 
            <a href="#" className="policy">Privacy Policy</a>
          </div>
        </div>
      );
    } else {
      field = (
        <div>
          <input
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            className="login-input"
            placeholder="username"
          />
          <br />
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="login-input"
            placeholder="password"
          />
          <div className="confirmAccount">
            <p>We’ll email you to confirm or verify your account.</p>
            <a href="#" className="policy">
              Privacy Policy
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="intro-form">
            <div onClick={this.props.closeModal} className="close-x">
              X
            </div>
            <h3 className="loginSignUp">Login or signup</h3>
          </div>
          <div className="welcome">Welcome to AT bnb!</div>
          <br />
          {this.renderErrors()}
          <div className="login-form">
            {field}
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
          <div className="login-demo" onClick={this.demoLogin}>
            Demo Login
          </div>
        </form>
      </div>
    );
  }
}



export default withRouter(SessionForm);