import React from 'react';

export default class PendingConnectionsViewEntry extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <tr className="pendingRow">
  	    <td className="lowertooltip">
  	      <div className="pendingUsername">{this.props.node.username}</div>
          <p className="lowertooltiptext">
  	        {this.props.node.firstName} {this.props.node.lastName}<br />
			      {this.props.node.phone}<br />
			      {this.props.node.location}<br />
			      Employer: {this.props.node.company}<br />
			      Field: {this.props.node.field}<br />
			      Tagline: {this.props.node.tagline}
          </p>
        </td>
  	  </tr>
  	)
  }
}