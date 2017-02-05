import React from 'react';

export default class PendingConnectionsViewEntry extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <tr className="pendingRow">
  	    <td className="pendingConnectionsViewEntry">
  	      <div className="username">{this.props.node.username}</div>
          <section className="pendingUser">
  	        <p className="pendingInfo">
  	          {this.props.node.firstName} {this.props.node.lastName}<br />
			        {this.props.node.phone}<br />
			        {this.props.node.location}<br />
			        Employer: {this.props.node.company}<br />
			        Field: {this.props.node.field}<br />
			        Tagline: {this.props.node.tagline}
  	        </p>
          </section>
  	    </td>
  	  </tr>
  	)
  }
}