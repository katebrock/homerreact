import React from 'react';
import ReactDOM from 'react-dom';
import $ from './jquery';
import {Router, Route, Link} from 'react-router';


import Homerfeed from './homerfeed';
import Register from './register';
import Login from './login';
import Notfound from './notfound';

class App extends React.Component {

  render () {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}

let routes = (
  <Router>
    <Route path='/' component={App}>
      <Route path='/homerfeed' component={Homerfeed} swag="yolo">
      </Route>
      <Route path='/login' component={Login}>
      </Route>
      <Route path='/register' component={Register}>
      </Route>
    </Route>
    <Route path="*" component={Notfound}>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));

export default App.getDohta;
