import React from 'react';

export default class UserPhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   	return <img
      src={this.props.photo}
  	  alt="enter dynamically-generated user or photo name on props argument here"
  	  id="user-photo"
    />
  }
}