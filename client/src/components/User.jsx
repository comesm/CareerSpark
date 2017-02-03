import React from 'react';
<<<<<<< f4f85eabe7c0114a35a04cd99c6396c3ff8f8ea5
<<<<<<< 32ebc586268de2b35746f792e14ebbb9b312bd00
=======
import { render } from 'react-dom';
>>>>>>> (Client)
=======
>>>>>>> (client) Deleted unused component (router.jsx) and updated es5 syntax to
import UserPhoto from './UserPhoto.jsx'; //may need {UserPhoto}

export default class User extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {

  	}

  }

  render() {
  	return (
  	  <section id="profile-component">
  	    <UserPhoto />
  	    <article id="user-summary">
          Pithy user summary containing name, job, and general location here
        </article>
  	    <article id="user-description">
  	      Abraham Lincoln
  	      President
  	      Into civil rights
  	      1600 Pennsylvania Ave.
  	    </article>
  	  </section>
  	)
  }
}