import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './Header.jsx';

export default class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {

  	}
  }

  render() {
    return (
  	  <div>
  	    <Header />
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