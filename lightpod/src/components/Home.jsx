import React, { Component } from 'react';

import { NavLink} from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          podcasts: []
        };
      }

      componentDidMount(){
          const option = {
                method: 'GET',
                headers: {
                    'X-ListenAPI-Key' : "6c0c13adaf0c44199d1ed792266488f9"
                }
          }
        //   let header = new Headers();
        //   header.append("X-ListenAPI-Key", "6c0c13adaf0c44199d1ed792266488f9");
          fetch("https://listen-api.listennotes.com/api/v2/best_podcasts?page=2&safe_mode=1", option)
          .then(res => res.json())
          .then((list) => {
              console.log(list.podcasts);
              this.setState({
                  isLoaded: true,
                  podcasts: list.podcasts,
                }
                )
          }, (error) => {
              console.log(error);
              this.setState({
                  isLoaded:true,
                  error:error
              });
          })
          .catch();
      }
    
    render() { 
        // return ( 
        //     <div>{this.props.title}</div>
        //  );

        const { error, isLoaded, podcasts } = this.state;
        if (error) {
          return (<div>Error: {error.message}</div>);
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            // <ul>
            //   {items.map(item => (
            //     <li key={item.name}>
            //       {item.name} {item.price}
            //     </li>
            //   ))}
            // </ul>
            <React.Fragment>
            <div className="container contain-podcasts">
                <div className="row">
                    {podcasts.map(item => (
                        <div className="col-md-4" key={item.id} id={item.id}>
                            <div className="inner">
                            <NavLink exact to="/">
                                <img id={item.id} src={item.image}/>
                                <p className="podtitle" id={item.id}>{item.title}</p>
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