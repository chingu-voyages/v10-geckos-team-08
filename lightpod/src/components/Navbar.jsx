import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class Navbar extends Component {
    
    render() { 
        return (  
        <nav class="navbar navbar-light justify-content-between">
                <a class="navbar-brand"><NavLink exact to="/" href="#">{this.props.title}</NavLink></a>
                <div className="form-inline">
                        <button className="btn btn-outline-success my-2 my-sm-0 login">Login</button>
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