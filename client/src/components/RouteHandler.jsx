import React from 'react'
import {
  Router,
  Route,
  Link,
  browserHistory
} from 'react-router';
import App from './App.jsx';
import { Profile } from './Profile.jsx';
import { About } from './About.jsx';
import SignUp from './SignUp.jsx';

const RouteHandler = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="profile" component={Profile} />
      <Route path="about" component={About} />
      {/*<Route path="login" component={Login} />*/}
      <Route path="signup" component={SignUp} />
    </Route>
    <Route path="*" component={App} />
  </Router>
)

export { RouteHandler }