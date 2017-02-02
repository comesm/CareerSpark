import React from 'react';
import { render } from 'react-dom';
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
  	    <p>Blah, blah blah.</p>
  	  	<p>You talk too much.</p>
      </div>
    )
  }
}