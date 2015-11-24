import React from 'react';
import ReactDOM from 'react-dom';
import $ from './jquery';
import {Router, Route, Link} from 'react-router';


import Homerfeed from './components/homerfeed';
import Register from './components/register';
import Login from './components/login';
import Notfound from './components/notfound';

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
      <Route path='/homerfeed' component={Homerfeed} swag='yolo'/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>

    </Route>
    <Route path='*' component={Notfound}/>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));

export default App.getDohta;
