import React from 'react';
import dummyData from './dummyConnections.js';
import ConnectionsViewEntry from './ConnectionsViewEntry.jsx';

export default class ConnectionsView extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {

  	}
  }

  render() {
  	var contactList = dummyData.map((user, idx) => (
	    <ConnectionsViewEntry user={user} key={idx} />
	  ))

  	return (
  	  <div id="connectionsViewContainer">
        <table id="connectionsView">
          <tr>
        	  <th>Connections</th>
          </tr>
          {contactList}
        </table>
  	  </div>
  	)
  }
}