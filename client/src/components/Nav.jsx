import React from 'react';
import Link from 'react-router';

const Nav = () => (
  <ul id="Nav">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/profile">Profile</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
)

export { Nav }