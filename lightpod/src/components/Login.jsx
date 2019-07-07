import React, { Component } from 'react';

class Login extends Component {
    
    render() { 
        return ( 
            <div className="login-container">
                <div className="login-header">{this.props.title}</div>
                <form>
                    <div class="form-group">
                        <input type="email" className="form-control" placeholder="Enter email"></input>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div class="form-group">
                         <input type="password" class="form-control"  placeholder="Password"></input>
                    </div>
                     
                    <button type="submit" class="btn btn-primary login-submit">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Login;