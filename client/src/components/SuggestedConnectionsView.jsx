import React from 'react';
import Header from './Header.jsx'
// import SuggestedConnectionsViewEntry from './SuggestedConnectionsViewEntry.jsx'

export default class SuggestedConnectionsView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentList: this.props.users,
      current: this.props.users[0] || {}
    }
    console.log('22', this.props);
  }

  handleReject() {
    this.setState({'currentList': this.state.currentList.slice(1)});
    this.setState({current: this.state.currentList[0]});
  }


  handleAccept() {
    this.setState({'currentList': this.state.currentList.slice(1)});
    this.setState({current: this.state.currentList[0]});
  }


  render() {
    return (
      <table id="suggestedConnectionsView">
        <thead>
          <th className="suggestedHeader">{this.state.current.username}</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#">
                <img
                  src="./images/red-x.png"
                  alt="click to reject"
                  className="suggestedReject"
                  onClick={this.handleReject.bind(this)}
                />
              </a>
            </td>
            <td>
              <img
                src={this.state.current.profileImageUrl}
                className="suggestedImage"
              />
            </td>
            <td>
              <a href="#">
                <img
                  src="./images/green-check.png"
                  alt="click to approve"
                  className="suggestedApprove"
                  onClick={this.handleAccept.bind(this)}
                />
              </a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="suggestedDescription">
              {this.state.current.firstName} {this.state.current.lastName}<br />
              Employer: {this.state.current.company}<br />
              Field: {this.state.current.field}<br />
              Tagline: {this.state.current.tagline}<br />
              Location: {this.state.current.location}
            </td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

