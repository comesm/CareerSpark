import React from 'react';
import { render } from 'react-dom';
import User from './User.jsx';

class App extends React.Component {
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

        <img src="images/red-x.png" alt="click to deny" id="red-x" />
        <User />
        <img src="images/green-check.png" alt="click to approve" id="green-check" />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));