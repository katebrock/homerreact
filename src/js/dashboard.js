import React from 'react';
import $ from 'jquery';

class Dashboard extends React.Component {

    componentDidMount(){
          let currentUser;
          let email;
          let tweets = response.included.data.map(tweet => {
            currentUser = tweet.relationships.user.data.id;
            response.data.forEach(simpson => {
              if(currentUser === simpson.id){
                email = simpson.attributes.email;
              }
            });
            return {
              tweet: tweet.attributes.body,
              created: tweet.attributes.created_at,
              email: email
            }
          });
    }
  }
  render () {

  }
}

export default ;
