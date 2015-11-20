import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      tweets: {},
    }

  componentDidMount(){
    $.ajax("https://twitterapii.herokuapp.com/users.json?include=tweets").then(response => {
    });
  }

  render () {

  }
}

ReactDOM.render(
  <h1>Hello world!</h1>,
  document.getElementById("app")
);


export default App;
