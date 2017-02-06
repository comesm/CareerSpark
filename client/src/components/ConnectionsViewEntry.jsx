import React from 'react';

export default class ConnectionsViewEntry extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <tr>
  	    <td className="tooltip">
  	      {this.props.user.username}
  	      <p className="tooltiptext">
  	        {this.props.user.firstName} {this.props.user.lastName}<br />
			      {this.props.user.phone}<br />
			      {this.props.user.location}<br />
			      Employer: {this.props.user.company}<br />
			      Field: {this.props.user.field}<br />
			      Tagline: {this.props.user.tagline}
  	      </p>
  	    </td>
  	  </tr>
  	)
  }
}