import React, { PropTypes } from 'react'

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

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

  handleRegister(e) {
    e.preventDefault();

    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let passwordConfirm = this.refs.passwordConfirm.value;

    if (email && password && password === passwordConfirm) {
      User.register({
        email: email,
        password: password
      }, (error, data) => {
        if (!error) {
          // this.props.history.pushState(null, '/#/login'); // TODO: Fix me
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
    <div className= "login">
      <h1>Login Page</h1>
      <input ref="email" type="text" placeholder="username@simpsons.com" className="username"/>
      <input ref="password" type="password" placeholder="Password" className="password"/>
      <input ref="passwordConfirm" type="submit" value="Login" className="loginSubmit"/>
      <input type="submit" value="Register" className="registername"/>
    </div>
   )
  }
}


export default Login;
