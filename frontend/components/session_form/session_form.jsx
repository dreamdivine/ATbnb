

// import React from "react";
// import { Link } from "react-router-dom";

// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const user = Object.assign({}, this.state);
//     this.props.processForm(user);
//   }

//   update(field) {
//     return (e) => {
//       this.setState({ [field]: e.target.value });
//     };
//   }

//   render() {
//     let otherLink;
//     if (this.props.formType === "login") {
//       otherLink = <Link to="/signup">Sign Up</Link>;
//     } else {
//       otherLink = <Link to="/login">Login</Link>;
//     }

//     return (
//       <div>
//         <h3>
//           {this.props.formType} or {otherLink}
//         </h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={this.state.username}
//               onChange={this.update("username")}
//             ></input>
//           </label>
//           <br />
//           <label>
//             Password:
//             <input
//               type="password"
//               value={this.state.password}
//               onChange={this.update("password")}
//             ></input>
//           </label>
//           <br />
//           <button type="submit">{this.props.formType}</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default SessionForm;


import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to AT bnb!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <br />
            <br />
            <label>
              First Name:
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="login-input"
              />
            </label>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
