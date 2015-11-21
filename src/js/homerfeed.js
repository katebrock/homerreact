import React from 'react';
import $ from 'jquery';

import Hweet from './hweet'

class Homerfeed extends React.Component {
  render(){
    let currentUser;
    let email;

    this.props.hweets.sort((yolo, swagamuffin) => {
     let muffin = new Date(yolo.attributes.created_at).getTime();
     let swaga = new Date(swagamuffin.attributes.created_at).getTime();
     return swaga - muffin;
 });

    let hweets = this.props.hweets.map(hweet => {
      currentUser = hweet.relationships.user.data.id;
      this.props.users.forEach(simpson => {
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
      <ul className="hweetfeed">
        {hweets}
      </ul>
    )
  }
}

export default Homerfeed;
