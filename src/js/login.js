import React, { PropTypes } from 'react'

class Login extends React.Component {
  render () {

  return(
    <div className= "login">
      <h1>Login Page</h1>
      <input type="text" placeholder="username@simpsons.com" className="username"/>
      <input type="password" placeholder="Password" className="password"/>
      <input type="submit" value="Login" className="loginSubmit"/>
      <a href="#register">Register</a>
    </div>
   )
  }
}


export default Login;
