import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
  	return (
  	  <ul id="Nav">
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/profile" activeClassName="active">Profile</Link></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
      </ul>
  	)
  }
}