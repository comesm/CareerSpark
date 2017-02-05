import React from 'react';
import Header from './Header.jsx'
import User from './User.jsx'

export default class UserEntryView extends React.Component {

    // this.state = {
    //   user: {} ,
    //   pendingConnectionsIncoming: [],
    //   pendingConnectionsOutgoing: [],
    //   acceptedConnections: [],
    //   suggestedConnections: [],
    // }
  constructor(props) {

   super(props);
   this.state = {current: this.props.user.pendingConnectionsIncoming[0],
     currentList: this.props.user.pendingConnectionsIncoming}
  }

  clickYes() {
    var currUser = this.state.currentList.shift();
    this.setState({current: this.state.currentList[0]});

    if(this.state.currentList === this.props.user.suggestedConnections) {
      //click 'yes' on the suggestedConnection - add to pending outGoing connection
      this.props.user.pendingConnectionsOutgoing.push(currUser);
    }

    //change the current list from pendingConnectionsIncoming to suggested
    //suggestedConnections once we accept all pendingConnectionsIncoming
    if(this.state.currentList === this.props.user.pendingConnectionsIncoming) {
       //accept incoming connections
       this.props.user.acceptedConnections.push(currUser);

      if(this.props.user.pendingConnectionsIncoming.length === 0) {
        this.setState({currentList: this.props.user.suggestedConnections,
          current: this.props.user.suggestedConnections[0]});
      }
    }
  }

  clickNo() {

    this.state.currentList.shift();
    this.setState({current: this.state.currentList[0]});

    if(this.props.user.pendingConnectionsIncoming.length === 0) {
        this.setState({currentList: this.props.user.suggestedConnections,
          current: this.props.user.suggestedConnections[0]
          });
    }
  }

  render() {
    console.log('54', this.props.user);
    return (
            <div>
        <img src="./images/red-x.png"
             alt="click to reject"
             className="user-choice red-x"
             onClick={()=>{this.clickNo()}}
             />

          <User currentConnection={this.state.current} />


        <img src="./images/green-check.png"
             alt="click to approve"
             className="user-choice green-check"
             onClick={()=>{this.clickYes()}}
             />
             </div>
            )
          }
        }

