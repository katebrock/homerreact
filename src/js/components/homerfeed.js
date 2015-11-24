import React from 'react';
import $ from 'jquery';

import Hweet from './hweet'

class Homerfeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      users: [],
      hweets: []
    };

    console.log(this.props);

}
  componentDidMount(){
    $.ajax("https://twitter-pi.herokuapp.com/users.json?include=tweets").then(response => {
      this.setState({
        users: response.data,
        hweets: response.included
      });
    });
  }

  render(){
    let currentUser;
    let email;

    this.state.hweets.sort((yolo, swagamuffin) => {
     let muffin = new Date(yolo.attributes.created_at).getTime();
     let swaga = new Date(swagamuffin.attributes.created_at).getTime();
     return swaga - muffin;
 });

    let hweets = this.state.hweets.map(hweet => {
      currentUser = hweet.relationships.user.data.id;
      this.state.users.forEach(simpson => {
        if(currentUser === simpson.id){
          email = simpson.attributes.email;
        }
      });

      return (
        <Hweet
        key = {hweet.id}
        hweet = {hweet.attributes.body}
        created = {hweet.attributes.created_at}
        email = {email}
        />
    );
    });
    return (
      <div>
        <h1>Homepage</h1>
          <ul className="hweetfeed">
            {hweets}
          </ul>
      </div>
    )
  }
}

export default Homerfeed;
