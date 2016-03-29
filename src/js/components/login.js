import React from 'react';

import User from '../models/user';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {

    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if (email && password) {
      User.login({
        username: email,
        password: password
      }, (error, data) => {
        if (!error) {
          console.log(User.isLoggedIn());
        } else {
          alert('we had an error');
        }
      });
    } else {
      alert('You messed up. Try again.');
    }
  }

  render () {

  return(
    <div className= 'login'>
      <h1>Login Page</h1>
      <input ref='email' type='text' placeholder='username@simpsons.com' className='username'/>
      <input ref='password' type='password' placeholder='Password' className='password'/>
      <a href='#/homerfeed' onClick={this.handleLogin} className='loginSubmit'>Login</a>
    </div>
   )
  }
}


export default Login;
