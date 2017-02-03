import React from 'react'
import {
  browserHistory,
  Router,
  Route,
  Link
} from 'react-router';
import App from './App.jsx';
import { Profile } from './Profile.jsx';
import { About } from './About.jsx';

const RouteHandler = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route path="/" component={App} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export { RouteHandler }