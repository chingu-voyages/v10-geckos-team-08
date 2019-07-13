import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';

class Player extends Component {


    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
        };
       
      }

      that= this;

    checkclicked = () => {
        if(this.props.checkstate === true && this.props.audio != null){
            return (
                <React.Fragment>
                <footer className="footer player navbar fixed-bottom navbar-expand-sm">
                    <div className="footer-left">
                        <img className="audio-image" src={this.props.image}/>
                    </div>
                    <div className ="footer-right">
                        <div className="audio-player">
                        <AudioPlayer
                             autoPlay
                             src={this.props.audio}
                             onPlay={e => console.log("onPlay")}
                            // other props here
                        />
    
                        </div>
    
                    </div>
                </footer>
    
                </React.Fragment>
            )
        } else {

        }
    }


    // getEpisode = () =>{
    //     console.log(this.that.props.id);
    //     const option = {
    //           method: 'GET',
    //           headers: {
    //               'X-ListenAPI-Key' : "6c0c13adaf0c44199d1ed792266488f9"
    //           }
    //     }
    //   //   let header = new Headers();
    //   //   header.append("X-ListenAPI-Key", "6c0c13adaf0c44199d1ed792266488f9");
    //     fetch(`https://listen-api.listennotes.com/api/v2/podcasts/${this.that.props.id}?sort=recent_first`, option)
    //     .then(res => res.json())
    //     .then((episode) => {
    //         console.log(`${episode.audio} and image ${episode.image}`);
    //         this.setState({
    //             isLoaded: true,
    //             audiofile: episode.audio,
    //             imagefile:episode.image
    //           }
    //           )
    //     })
    //     .catch(error => {
    //     //   this.props.history.push('/');
    //     });
    // }
  
    render() { 
        return (  
           <div className="container">
               {this.checkclicked()}
           </div>
        );
    }
}
 
export default Player;