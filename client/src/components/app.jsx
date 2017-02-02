import React from 'react';
import Header from './Header.jsx';

import User from './User.jsx';
import UserEntryView from './UserEntryView.jsx'
import $ from 'jquery';


export default class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      user: {},
      pendingConnectionsIncoming: [],
      pendingConnectionsOutgoing: [],
      acceptedConnections: [],
      suggestedConnections: [],
  	}
  }

  getUserInfo(userId) {
    var context = this;
    // this callback will take the data returned from the GET request, and setState with it.
    var callback = function(data) {
      console.log('GET request successful');
      context.setState(data);
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
  componentDidMount() {
    this.getUserInfo(1)
  }

  // Dev Note: The "show state" button below can be used for debugging. Should be removed at some point.

  render() {

    return (
      <div>
        <Header />
        <UserEntryView user={this.state} />
        <img src="./images/red-x.png"
             alt="click to reject"
             className="user-choice red-x"
        />
        <User />
        <img src="./images/green-check.png"
             alt="click to approve"
             className="user-choice green-check"
        />
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
<<<<<<< c9457a435a6415bbfb2fc98904622e44e3645581
<<<<<<< b88b7bd56d3881cab77d7754ab350899249b1a02

=======
  // }
>>>>>>> minor change to controller
=======

>>>>>>> minor change to controller
