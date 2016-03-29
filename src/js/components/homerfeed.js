import React from 'react';
import $ from 'jquery';

import Hweet from './hweet';
import User from '../models/user';

class Homerfeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      users: [],
      hweets: []
    };

    console.log(this.props);
    this.handleHweet = this.handleHweet.bind(this);
}
  componentDidMount(){
    $.ajax('https://twitter-pi.herokuapp.com/users.json?include=tweets').then(response => {
      this.setState({
        users: response.data,
        hweets: response.included
      });
    });
  }

  handleHweet(){
    let hweet = this.refs.hweet.value;
    User.hweet({
      'body': hweet
    }, (error, data) => {
      if (!error) {
        // this.props.history.pushState(null, '/#/login'); // TODO: Fix me
      } else {
        alert('we had an error');
      }
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
          <ul className='hweetfeed'>
            {hweets}
          </ul>
          <textarea ref='hweet' rows='100' rows='8' placeholder='Enter dohs and hweets'>
          </textarea>
          <input type='submit' onClick={this.handleHweet} value='Hweet it!'/>
      </div>
    )
  }
}

export default Homerfeed;
