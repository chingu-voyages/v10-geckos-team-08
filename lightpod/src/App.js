import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './utils/app';
import { app } from './utils/app';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import SinglePodcast from './components/singlepodcast';
import Player from './components/player';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        loginstatus : null,
        podcastID : "",
        playershow : false,
        episodeaudio : "",
        episodeimage:"",
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
  this.setState({loginstatus : loginstat});
 
}

getPodcastID = podcast => {
  this.setState({podcastID:podcast});
}

showplayer = (check, audio, image,) => {
  if(check == 'true'){
    this.setState({playershow: true, episodeaudio:audio, episodeimage:image});
  }
}

  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="LightPod" logintitle="Login" signuptitle="Sign Up" loginstat={this.state.loginstatus}/>
          <Route exact path="/" render={()=> <Home title="Podcast List" onpodcastselect={this.getPodcastID}/>} />
          <Route exact path="/login" render={()=> <Login title="Login" onsubmmit={this.handleLoginCheck}/>} />
          <Route exact path="/signup" render={()=> <Signup title="Sign Up"/>} />
          <Route exact path="/podcastdetail" render={() => <SinglePodcast title="singlePodcast" podcast={this.state.podcastID} onplaybuttonclicked={this.showplayer}/>}/>
          <Player title="player"  checkstate={this.state.playershow} audio={this.state.episodeaudio} image={this.state.episodeimage}/>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default App;
