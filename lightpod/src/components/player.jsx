import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import { app } from '../utils/app';



class Player extends Component {
  constructor(props) {
    super(props);
    this.appplayer = React.createRef();
    this.state = {
      error: null,
      isLoaded: false
    };
  }



  that = this;

  handlePlaytime =() => {
    const name = this.appplayer.current
    name.currentTime = 0;
    console.log(name.currentTime);
      setInterval(function(){
        
        if(name.currentTime>20){
          app.auth().onAuthStateChanged(user => {
            if(user){
             
            }else{
            name.pause();
            alert("Please SignUp to listen to full episode");
            name.currentTime = 0;
            }
          });
        }
      },1000);
  };


  checkclicked = () => {
    if (this.props.checkstate === true && this.props.audio != null) {
      return (
        <React.Fragment>
          <footer className="footer player navbar fixed-bottom navbar-expand-sm">
            <div className="footer-left">
              <img className="audio-image" src={this.that.props.image} />
            </div>
            <div className="footer-right">
              <div className="audio-player">
                <audio controls autoPlay src={this.that.props.audio} ref={ this.appplayer } onPlay={this.handlePlaytime}>
                </audio>
              </div>
            </div>
          </footer>
        </React.Fragment>
      );
    } else {
    }
  };

  render() {
    return <div className="container">{this.checkclicked()}</div>;
  }
}

export default Player;
