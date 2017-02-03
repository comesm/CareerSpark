import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
  	return (
  	  <ul id="Nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/newuser">New User</Link></li>
      </ul>
  	)
  }
}