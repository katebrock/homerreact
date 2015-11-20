import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      users: [],
      tweets: []
    };
}
  componentDidMount(){
    $.ajax("https://twitterapii.herokuapp.com/users.json?include=tweets").then(response => {
      let users = response.data
    });
  }

  render () {
    return (
      <div className="wrapper">

      </div>
    )
  }
}

ReactDOM.render(
  <h1>Hello world!</h1>,
  document.getElementById("app")
);


export default App;
