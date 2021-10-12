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
      .then(() => this.props.history.push("/"));
  }

  demoLogin(e) {
    e.preventDefault();
    this.props
      .loginDemoUser()
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push("/"));
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
        <div className="signupToFill">
          <div>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
              className="login-input"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              className="login-input"
            />
          </div>
          <div>
            <input
              id="email"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              className="login-input"
            />
          </div>
          <div>
            <input
              id="firstName"
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              placeholder="First name"
              className="login-input"
            />
          </div>
          <div>
            <input
              id="lastName"
              type="text"
              value={this.state.last_name}
              placeholder="Last name"
              onChange={this.update("last_name")}
              className="login-input"
            />
            <div className="bottom-border"></div>
          </div>
          <div className="confirmAccount">
            <p>We’ll email you to confirm or verify your account.</p>
            <a href="#" className="policy">
              Privacy Policy
            </a>
          </div>
        </div>
      );
    } else {
      field = (
        <div className="loginToFill">
          <div>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="login-input"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"
              placeholder="Password"
            />
          </div>
          <div className="bottom-border"></div>  
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
              <i class="fas fa-times" id="x-icon"></i>
            </div>
            <h3 className="loginSignUp">Log in or sign up</h3>
          </div>
          <div className="welcome">Welcome to AT bnb!</div>
          <br />
          <div className="session-errors">{this.renderErrors()}</div>
          <div className="login-form">
            {field}
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
          <div className="or-Line">
            <div className="separator"></div>
            <div className="or">or</div>
            <div className="separator"></div>
          </div>
          <div className="contact-demo">
            <div className="login-demo" onClick={this.demoLogin}>
              <i class="fas fa-user" id="users-icon"></i>
              <p>Continue with Demo Login</p>
            </div>
            <div className="github">
              <i class="fab fa-github" id="github-icon"></i>
              <a href="https://github.com/dreamdivine">Continue with Github</a>
            </div>
            <div className="linkedIn">
              <i class="fab fa-linkedin" id="linkedIn-icon"></i>
              <a href="https://github.com/dreamdivine">
                Continue with LinkedIn
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}



export default withRouter(SessionForm);