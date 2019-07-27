import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../utils/app";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      useremail: ""
    };

    this.that = this;
  }

  // this method handles chages in email field
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  // this method handles chages in password field
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  // this method handles login to firebase
  handleLogin = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        if (user) {
            alert("Login Successful");
            this.that.setState({ useremail: user.user.email });
            this.that.props.onsubmmit(this.state.useremail);
        } else {
          
        }
      })
      .catch(error => {
          console.log(error.message)
          alert("User Details not found. If you have registered please try and login again");
    });

    this.props.history.push("/"); // this handles the navigation to home component after login
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-header">{this.props.title}</div>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary login-submit"
            onClick={this.handleLogin}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
