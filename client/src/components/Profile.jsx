import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import ConnectionsView from './ConnectionsView.jsx';
import ProfileView from './ProfileView.jsx';

export default class Profile extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {

  	}
  }

  render() {
    {console.log('profile view this.props:',this.props)}
  	return (
      <div>
  	    <Header />
        <Nav />
  	    <ConnectionsView />
  	    <ProfileView />
  	  </div>
  	)
  }
}