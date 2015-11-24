import React from 'react';


class Register extends React.Component {

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
      <div className="register">
        <h1>Register Page</h1>
        <input type="text" ref="email" placeholder="Email" className="email"/>
        <input type="password" ref="password" placeholder="Password" className="password"/>
        <input type="passwordConfirm" ref="passwordConfirm" placeholder="Confirm Password" className="passwordconfirm"/>
        <input type="submit" value="Register" className="registerName"/>
        <a href="#login">Already have an account?</a>
        <a href="#">Home</a>
      </div>
    )

  }
}

export default Register;
