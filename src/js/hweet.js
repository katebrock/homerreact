import React from 'react';
import $ from 'jquery';
import Moment from 'moment';

class Hweet extends React.Component {
render (){
  return (
    <li className="hweet">
      <h5 className="email">{this.props.email}</h5>
      <time>{Moment(this.props.created).fromNow()}</time>
      <p className="hweetbody">{this.props.hweet}</p>
    </li>
  )
  }
}

export default Hweet;
