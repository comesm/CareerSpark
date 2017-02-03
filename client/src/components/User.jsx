import React from 'react';

import { render } from 'react-dom';

import UserPhoto from './UserPhoto.jsx'; //may need {UserPhoto}

export default class User extends React.Component {
  constructor(props) {
  	super(props);
      this.state = this.props;
    }

  render() {
    console.log('14', this.props);
  	return (
  	  <section id="profile-component">
      <h1>{this.props.currentConnection.firstName}</h1>
      <h1>{this.props.currentConnection.lastName}</h1>
      <h1>{this.props.currentConnection.username}</h1>
  	    <UserPhoto photo={this.props.currentConnection.profileImageUrl} />
  	    <article id="user-summary">
          <h1>{this.props.currentConnection.tagline}</h1>
        </article>
  	    <article id="user-description">
  	      {this.props.currentConnection.company}
          {this.props.currentConnection.location}
          {this.props.currentConnection.field}
  	    </article>
  	  </section>
  	)
  }
}