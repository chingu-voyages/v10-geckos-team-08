import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './utils/app';
import { app, auth } from './utils/app';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        loginstatus : null
    }
}

componentDidMount(){
  app.auth().onAuthStateChanged(user => {
    if(user){
      this.setState({loginstatus:user.email});
    }else{
      this.setState({loginstatus: null});
    }
  })
}

handleLoginCheck = loginstat => {
  console.log("handle login check called" + loginstat);
  this.setState({loginstatus : loginstat});
 
}

  render() { 
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar title="LightPod" logintitle="Login" signuptitle="Sign Up" loginstat={this.state.loginstatus}/>
        <Route exact path="/" render={()=> <Home title="Podcast List"/>} />
        <Route exact path="/login" render={()=> <Login title="Login" onsubmmit={this.handleLoginCheck}/>} />
        <Route exact path="/signup" render={()=> <Signup title="Sign Up"/>} />
      </div>
      </BrowserRouter>
    );
  }
}
 
export default App;
