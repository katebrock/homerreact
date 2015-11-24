import React, { PropTypes } from 'react'

class Notfound extends React.Component {
  render () {
    return (
      <div>
        <h2>Doh! Page not found!</h2>
        <iframe height="1300px" width="100%" src="https://www.youtube.com/embed/HQUOOdpuh-Q" preload>
        </iframe>
      </div>
    );
  }
}

export default Notfound;
