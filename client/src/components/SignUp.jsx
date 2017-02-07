import React from 'react';
import NewUser from './NewUser.jsx';
import Header from './Header.jsx';
import Nav from './Nav.jsx';


//render our signup page encapsulated into Header NewUser
//components
export default class SignUp extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
  	  <div>
        <Header />
        <NewUser />
      </div>
    )
  }
}