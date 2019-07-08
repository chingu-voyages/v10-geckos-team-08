import React, { Component } from 'react';

class Signup extends Component {
  render() { 
    return ( 
      <div className="login-container">
        <div className="login-header">{this.props.title}</div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Username"></input>
            <input type="email" className="form-control" placeholder="Enter Email"></input>
          </div>
          <div className="form-group">
            <input type="password" class="form-control"  placeholder="Password"></input>
          </div>   
          <button type="submit" class="btn btn-primary login-submit">Submit</button>
        </form>
      </div>
    );
  }
}
 
export default Signup;