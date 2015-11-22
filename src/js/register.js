import React from 'react';


class Register extends React.Component {
  render () {
    return(
      <div className="register">
        <h1>Register Page</h1>
        <input type="text" placeholder="Email" className="email"/>
        <input type="password" placeholder="Password" className="password"/>
        <input type="passwordConfirm" placeholder="Confirm Password" className="passwordconfirm"/>
        <input type="submit" value="Register" className="registerName"/>
        <a href="#login">Already have an account?</a>
        <a href="#">Home</a>
      </div>
    )

  }
}

export default Register;
