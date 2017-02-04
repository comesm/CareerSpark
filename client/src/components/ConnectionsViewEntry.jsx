import React from 'react';

export default class ConnectionsViewEntry extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <tr>
  	    <td className="connectionsViewEntry tooltip">
  	      {this.props.node.username}
  	      <p className="tooltiptext">
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