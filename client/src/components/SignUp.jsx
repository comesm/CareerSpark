import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';
import User from './User.jsx';
// import $ from 'jquery';

export default class App extends React.Component {
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