import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';


class Navbar extends Component {

    checkLogin = () => {
        if (this.props.loginstat == null){
            return (
            <React.Fragment>    
            <button className="btn btn-outline-success my-2 my-sm-0 login"><NavLink exact to="/login">{this.props.logintitle}</NavLink></button>
            <button className="btn btn-outline-success my-2 my-sm-0 login"><NavLink exact to="/signup">{this.props.signuptitle}</NavLink></button>
            </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
                    <button className="btn btn-outline-success my-2 my-sm-0 login"><NavLink exact to="/">Logout</NavLink></button>
                    <h3 className="btn btn-outline-success my-2 my-sm-0 username">{this.props.loginstat}</h3>
                </React.Fragment>
            )
        }
    }
    
    render() { 
        return (  
        <nav className="navbar navbar-light justify-content-between">
                <NavLink className="navbar-brand" exact to="/" href="#">{this.props.title}</NavLink>
                <div className="form-inline">
                         {this.checkLogin()}
                        <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
               
        </nav>
        );
    }
}
 
export default Navbar;