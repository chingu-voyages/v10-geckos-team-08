import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SinglePodcast extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          podcast: null,
          image :""
        };
       
      }

      that= this;


      handlelisten = event => {
        event.preventDefault();
        this.props.onplaybuttonclicked("true",event.target.id, this.that.state.image);
      }

      componentDidMount(){
        console.log(this.that.props.podcast);
        const option = {
              method: 'GET',
              headers: {
                  'X-ListenAPI-Key' : "6c0c13adaf0c44199d1ed792266488f9"
              }
        }
      //   let header = new Headers();
      //   header.append("X-ListenAPI-Key", "6c0c13adaf0c44199d1ed792266488f9");
        fetch(`https://listen-api.listennotes.com/api/v2/podcasts/${this.that.props.podcast}?sort=recent_first`, option)
        .then(res => res.json())
        .then((list) => {
            this.setState({
                isLoaded: true,
                podcast: list,
                image :list.image,
                
              }
              )
        })
        .catch(error => {
          this.props.history.push('/');
        });
    }
    render() { 
        const { isLoaded, podcast } = this.state;
         if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <React.Fragment>
              <div className="container single-container">
                <div className="left-side">
                  <img className="podimage" src={podcast.image}/>
                  <p className="podtitle">{podcast.title}</p>
                  <p className="podpublisher">{podcast.publisher}</p>
                </div>
                <div className="right-side">
                    <p className="poddescription">{podcast.description}</p>
                    <div>
                        {podcast.episodes.map(episode => (
                            <div className="podepisodes" key={episode.id}> 
                                <p className="epititle">{episode.title}</p>
                                <p className="epidate">{new Date(episode.pub_date_ms).toString()}</p>
                                <p className="epilength">{Math.round(episode.audio_length_sec/60)}min</p>
                                <div className="listenbutton" id={episode.audio} key={episode.image} onClick={this.handlelisten}>LISTEN</div>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </React.Fragment>
          );
        }
    }
}
 
export default withRouter(SinglePodcast);