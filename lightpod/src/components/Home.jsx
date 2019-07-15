import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      podcasts: []
    };
  }

  componentDidMount() {
    const option = {
      method: "GET",
      headers: {
        "X-ListenAPI-Key": "6c0c13adaf0c44199d1ed792266488f9"
      }
    };
    fetch(
      "https://listen-api.listennotes.com/api/v2/best_podcasts?page=1&safe_mode=1&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30",
      option
    )
      .then(res => res.json())
      .then(
        list => {
          this.setState({
            isLoaded: true,
            podcasts: list.podcasts
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
      .catch();
  }

  handleidpick = event => {
      this.props.onpodcastselect(event.target.id)
  }

  render() {
    
    const { error, isLoaded, podcasts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div className="container contain-podcasts">
            <div className="row">
              {podcasts.map(item => (
                <div className="col-md-4" key={item.id} id={item.id} onClick={this.handleidpick}>
                  <div className="inner">
                    <NavLink exact to="/podcastdetail">
                      <img id={item.id} src={item.image} />
                      <p className="podtitle" id={item.id}>
                        {item.title}
                      </p>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Home;
