import React, { Component } from 'react';
import { app, auth } from '../utils/app';
import { withRouter } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn : false,
      username: '',
      email: '',
      password: ''
    }
  }

  onNameChange = (event) => {
    this.setState({username: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }


  onSubmitSignIn = async event => {
    const { username, email, password } = this.state;
    event.preventDefault();
    console.log(this.state);
    await auth.createUserWithEmailAndPassword(email, password)
      .catch(error => console.error(error.message))
      this.props.history.push("/"); // this handles the navigation to home component after login
  }

  render() { 
    const { username, email, password } = this.state;
    return (
      <div className="login-container">
        <div className="login-header">{this.props.title}</div>
        <form onSubmit={this.onSubmitSignIn}>
          <div className="form-group">
            <input type="text" className="form-control"  placeholder="Enter Username" value = {username} onChange={this.onNameChange}></input>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter Email" value = {email} onChange={this.onEmailChange}></input>
          </div>
          <div className="form-group">
            <input type="password" className="form-control"  placeholder="Password" value = {password} onChange={this.onPasswordChange}></input>
          </div>
          <button type="submit" className="btn btn-primary login-submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup)