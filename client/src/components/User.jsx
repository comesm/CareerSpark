import React from 'react';
<<<<<<< 32ebc586268de2b35746f792e14ebbb9b312bd00
=======
import { render } from 'react-dom';
>>>>>>> (Client)
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