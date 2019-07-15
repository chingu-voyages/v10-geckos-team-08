import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }



  that = this;

  checkclicked = () => {
    if (this.props.checkstate === true && this.props.audio != null) {
      return (
        <React.Fragment>
          <footer className="footer player navbar fixed-bottom navbar-expand-sm">
            <div className="footer-left">
              <img className="audio-image" src={this.props.image} />
            </div>
            <div className="footer-right">
              <div className="audio-player">
                <AudioPlayer
                  autoPlay
                  src={this.props.audio}
                  onPlay={e => console.log("onPlay")}
                  onCanPlay={e => this.that.setState({isLoaded:true})}

                  // other props here
                />
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
