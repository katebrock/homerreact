import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Homerfeed from './homerfeed';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      users: [],
      hweets: []
    };
}
  componentDidMount(){
    $.ajax("https://twitter-pi.herokuapp.com/users.json?include=tweets").then(response => {
      this.setState({
        users: response.data,
        hweets: response.included
      });
    });
  }

  render () {
    return (
      <div className="wrapper">
        <Homerfeed users={this.state.users} hweets={this.state.hweets}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);


export default App;
