import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import App from './App.jsx';
import About from './About.jsx';
// import Login from './Login.jsx';
import NewUser from './NewUser.jsx';
import Profile from './Profile.jsx';
import SignUp from './Signup.jsx';

render(
(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/newuser" component={NewUser} />
    <Route path="/profile" component={Profile} />
    <Route path="/signup" component={SignUp} />
  </Router>)
, document.getElementById('app'));