import React from 'react';
<<<<<<< HEAD
import { render } from 'react-dom';
=======
import {render} from 'react-dom';
import NewUser from './NewUser.jsx';
>>>>>>> Added a NewUser component and attached it to the SignUp page.
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
<<<<<<< HEAD
  	    <p>Blah, blah blah.</p>
  	  	<p>You talk too much.</p>
=======
        <h3>New User Sign Up</h3>
        <NewUser />
>>>>>>> Added a NewUser component and attached it to the SignUp page.
      </div>
    )
  }
}