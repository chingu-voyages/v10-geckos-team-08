import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn : false,
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
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

  onConfirmPasswordChange = (event) => {
    this.setState({confirmPassword: event.target.value});
  }

  
  render() { 
    return ( 
      <div className="login-container">
        <div className="login-header">{this.props.title}</div>
        <form>
        <div className="form-group">
            <input type="text" className="form-control"  placeholder="Enter Username" onChange={this.onNameChange}></input>
          </div> 
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter Email" onChange={this.onEmailChange}></input>
          </div>
          <div className="form-group">
            <input type="password" className="form-control"  placeholder="Password" onChange={this.onPasswordChange}></input>
          </div> 
          <div className="form-group">
            <input type="password" className="form-control"  placeholder="Confirm Password" onChange={this.onConfirmPasswordChange}></input>
          </div>   
          <button type="submit" className="btn btn-primary login-submit">Submit</button>
        </form>
      </div>
    );
  }
}
 
export default Signup;