import React from 'react';
import dummyData from './dummyConnections.js';
import PendingConnectionsViewEntry from './PendingConnectionsViewEntry.jsx';

export default class PendingConnectionsView extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {

  	}
  }

  render() {
  	var contactList = dummyData.map((node, idx) => (
	    <PendingConnectionsViewEntry node={node} key={idx} />
	  ))

  	/*
  	 * Once props data is available, swap out above the above dummy-data setup for below
  	 */

  	//if contact list exists and isn't 0, format the entries
  	// if (this.props.contacts && this.props.node.children.length > 0) {
	  // var contactList = this.props.contacts.map((child, idx) => {
	  // 	<ConnectionsViewEntry node={child} key={idx} />
	  // })
   //  }

  	return (
  	  <div>
        <table id="pendingConnectionsView">
          <tr>
        	  <th id="pendingConnectionsHeader">Pending Connections</th>
          </tr>
          {contactList}
        </table>
  	  </div>
  	)
  }
}