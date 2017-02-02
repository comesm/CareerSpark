import React from 'react'
import Nav from './Nav.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div id="header">CareerSpark</div>
          <div id="sub-header">Supercharge Your Professional Network</div>
          <Nav />
        </header>
      </div>
    )
  }
}