import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {

  	return (
  	  <ul id="nav">
        <li>
          <Link to="/"
                style={{"textDecoration":"none"}}
                activeClassName="active">Home
          </Link>
        </li>
        <li>
          <Link to="/profile"
                style={{"textDecoration":"none"}}
                activeClassName="active">Profile
          </Link>
        </li>
        <li>
          <Link to="/about"
                style={{"textDecoration":"none"}}
                activeClassName="active">About
          </Link>
        </li>
  	  </ul>

  	)
  }
}