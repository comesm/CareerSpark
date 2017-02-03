import React from 'react';
import Header from './Header.jsx';
import User from './User.jsx';
import UserEntryView from './UserEntryView.jsx'
import $ from 'jquery';
import mockData from '../mockData.js'

export default class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      user: {},
      pendingConnectionsIncoming: [],
      pendingConnectionsOutgoing: [],
      acceptedConnections: [],
      suggestedConnections: [],
      dataFetched:false
  	}
  }

  getUserInfo(userId) {
    var context = this;
    // this callback will take the data returned from the GET request, and setState with it.
    var callback = function(data) {
      console.log('25', data);
      console.log('GET request successful');
      context.setState({
        user: data.user,
        acceptedConnections: mockData.acceptedConnections,
        pendingConnectionsIncoming: mockData.pendingConnectionsIncoming,
        pendingConnectionsOutgoing: mockData.pendingConnectionsOutgoing,
        suggestedConnections: mockData.suggestedConnections,
        dataFetched:true
      }, function() {
      });
    };
    // makes request to our server, and sets state through the callback
    $.ajax({
      url: 'http://localhost:3000/api/users/' + userId,
      method: "GET",
      success: callback,
      error: () => console.error('user not found')
    })
  }

  getImages() {
    // console.log('39');
    // $.ajax({
    //   url:
    // })

  }

  // Dev Note: right now, we are hardwireing User1 as user to get on mount
  componentWillMount() {
    this.getUserInfo(1)
  }

  // Dev Note: The "show state" button below can be used for debugging. Should be removed at some point.

  render() {
    var dataFetched = this.state.dataFetched;
    return (
      <div>
        <Header />
<<<<<<< 0af59b49e9ef7dfc8354e7e250bf2bda67ac2fbd
        <UserEntryView user={this.state} />
<<<<<<< 30eb4b88847b69a702936449c73d73bcd3d065a0
        <img src="./images/red-x.png"
             alt="click to reject"
             className="user-choice red-x"
        />
        <User />
        <img src="./images/green-check.png"
             alt="click to approve"
             className="user-choice green-check"
        />
=======
>>>>>>> Added basic swiping functionality
=======
        {dataFetched ? <UserEntryView user={this.state} />: ''}
>>>>>>> swiping works
        <button onClick={()=>{console.log(this.state)}}>console log state</button>
      </div>
    )
  }
}
  /********

  Below is a sample AJAX request (using jquery) to our server. I haven't written the url route yet,
  but wanted to give general outline of how our client/server will fit together

  *********/

  // getAllUsersByLocation(locationName) {
  //   // I believe we'll need to do this to keep this binding inside our callback
  //   var context = this;
  //   // this callback will take the data returned from the GET request, and setState with it.
  //   var callback = function(err, data) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log('GET request successful');
  //       context.setState({
  //         userList: data,
  //         currentUser: data[0]
  //       })
  //     }
  //   };
  //   // makes request to our server, and sets state through the callback
  //   $.ajax({
  //     url: 'http://localhost:3000/api/location/' + locationName,
  //     method: "GET",
  //     success: callback,
  //     error: callback
  //   })

