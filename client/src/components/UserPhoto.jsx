import React from 'react';
import { render } from 'react-dom';

export default class UserPhoto extends React.Component {
  render() {
   	return <img
      src="./images/mickey-mouse.jpeg"
  	  alt="enter dynamically-generated user or photo name on props argument here"
  	  id="user-photo"
    />
  }
}