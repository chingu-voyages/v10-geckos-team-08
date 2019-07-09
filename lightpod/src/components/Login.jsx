import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './Home';

class Login extends Component {
  
    
   
    handleLogin = event => {
        event.preventDefault();
        this.props.onsubmmit("Ayooluwa");
        this.props.history.push('/');
        // <Route exact to='/' render = {() => <Home />} />
    }
    
    render() { 
        return ( 
            <div className="login-container">
                <div className="login-header">{this.props.title}</div>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter email"></input>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                         <input type="password" className="form-control"  placeholder="Password"></input>
                    </div>
                     
                    <button type="submit" className="btn btn-primary login-submit" onClick={this.handleLogin}>Submit</button>
                </form>
            </div>
         );
    }
}


 
export default withRouter(Login);