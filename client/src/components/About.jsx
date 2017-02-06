import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';

export default class Profile extends React.Component {
  render() {
  	return (
  	  <div>
  	    <Header />
        <Nav />
      </div>
    )
  }
}