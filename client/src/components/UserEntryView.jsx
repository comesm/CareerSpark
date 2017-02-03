import React from 'react';
import Header from './Header.jsx'
import User from './User.jsx'

export default class UserEntryView extends React.Component {

    // this.state = {
    //   user: {},
    //   pendingConnectionsIncoming: [],
    //   pendingConnectionsOutgoing: [],
    //   acceptedConnections: [],
    //   suggestedConnections: [],
    // }
  constructor(props) {
    super(props);
    this.state.user = props.user;
    //this.state.counter = 0;
    // this.state.currentList =
    //   props.pendingConnectionsIncoming.length > 0 ?
    //   props.pendingConnectionsIncoming :
    //   props.suggestedConnections;

    this.state.counter = 0;
  }

  clickYes() {
    console.log('added');
    if(this.state.currentList === this.props.pendingConnectionsIncoming) {
      if(this. props.pendingConnectionsIncoming.length === 0) {
        this.setState({currentList: this.props.suggestedConnections});
      }
    }
    this.state.currentList.splice()
    props.acceptedConnections.push(this.state.user);
  }

  clickNo() {
    console.log('rejected');
  }

  render() {
    return (
            <div>
        <img src="./images/red-x.png"
             alt="click to reject"
             className="user-choice red-x"
             onClick={()=>{this.clickNo()}}
             />
          <User currentConnection={this.state.user} />
        <img src="./images/green-check.png"
             alt="click to approve"
             className="user-choice green-check"
             onClick={()=>{this.clickYes()}}
             />
             </div>
            )
          }
        }

