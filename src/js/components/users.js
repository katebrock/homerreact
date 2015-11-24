import React from 'react';
import $ from 'jquery';

class Users extends React.Component {
  render () {
    let users;
    $.ajax("https://twitter-pi.herokuapp.com/users.json?include=tweets").then(response => {
    users = response.data.map(user => {
      return (<div className="user"></div><a href="#">user.attributes.email</a>)
    });
  });
    return (
      <div>
        <h1> Users Page </h1>
        <ul>
          {users}
        </ul>
      </div>
    )

  }
}

export default Users;
