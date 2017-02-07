import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import LoginApp from './LoginApp.jsx';

//parent component for handling login.
export default class Login extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
  	  <div>
        <Header />
        <LoginApp />
      </div>
    )
  }
}