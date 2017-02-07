import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';

//render our profile with these components
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