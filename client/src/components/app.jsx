import React from 'react';
import {render} from 'react-dom';
import User from './User.jsx';

export default class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {

  	}
  }

  render() {
    return (
  	  <div>
  	    <header>
  	      <div id="header">CareerSpark</div>
          <div id="sub-header">Supercharge Your Professional Network</div>
        </header>

        <img src="./images/red-x.png"
             alt="click to reject"
             className="user-choice red-x"
        />
        <User />
        <img src="./images/green-check.png"
             alt="click to approve"
             className="user-choice green-check"
        />
      </div>
    )
  }
}