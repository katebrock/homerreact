import React from 'react';

import addToken from "./jquery";
class Header extends React.Component {
  render () {
    let login;
      if(true){
        login = (<a href="#login" id="headerLogin">Log In</a>)
      }
      else {
        login = (<a href="#homerfeed">yolo filler</a>);
      }

    return (
      <header className="header">
        <div className="head_left">
          <div className="logo">
            <img src="assets/homer_simpsons.jpg"/>
          </div>
          <h1>Homer</h1>
        </div>
        {login}
        <div class="clear"></div>
      </header>);
  }
}

export default Header;
