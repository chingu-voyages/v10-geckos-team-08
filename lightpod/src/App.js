import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar title="LightPod" logintitle="Login" signuptitle="Sign Up"/>
        <Route exact path="/" render={()=> <Home title="Podcast List"/>} />
        <Route exact path="/login" render={()=> <Login title="Login"/>} />
        <Route exact path="/signup" render={()=> <Signup title="Sign Up"/>} />
      </div>
      </BrowserRouter>
    );
  }
}
 
export default App;
