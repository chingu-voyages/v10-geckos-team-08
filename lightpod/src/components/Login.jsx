import React, { Component } from 'react';

class Login extends Component {
    
    render() { 
        return ( 
            <div className="login-container">
                <div className="login-header">Login</div>
                <form className="login-form">
                    <input type="email" className="login-email" placeholder="email"></input> 
                    <input type="password" className="login-password" placeholder="password"></input>
                    <input type="button" className="login-button">Login</input>  
                </form>
            </div>
         );
    }
}
 
export default Login;