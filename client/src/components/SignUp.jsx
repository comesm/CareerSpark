import React from 'react';
import { render } from 'react-dom';
import NewUser from './NewUser.jsx';
// import $ from 'jquery';

export default class SignUp extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      currentUser: {},
      userList: []
  	}
  }

  render() {
    return (
  	  <div>
        <h3>New User Sign Up</h3>
        <NewUser />
      </div>
    )
  }
}