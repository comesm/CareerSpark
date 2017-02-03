var express = require('express');
var router = express.Router();
var db = require('../../db/controllers/Controller.js');

// when URL ending is: .../api/users
router.route('/')
  // returns array of all users
  .get(function(req, res) {
     db.findAllUsers(function(data) {
     	res.send(data);
     })
  })
  // posts new user. Returns user
  .post(function(req, res) {
    // The request body should look like a user.
    // Here's an example of a request body:
    // {
    //   "
    //   "username": "RouteTesting",
    //   "password": "unencrypted"
    //   "phone": 8675309,
    //   "tagline": "wowimcool",
    //   "firstName": "michael",
    //   "lastName": "comes",
    //   "location": "SF",
    //   "field": "engineering",
    //   "company": "HR",
    //   "imageUrl": "cloudinary.com/something"
    // }

    var user = req.body;
    // post user to db
    db.addUser(user, function(result) {
      res.send(result);
    });
  });

// when URL ending is /api/users/<id>
router.route('/:id')
  // returns data on user by ID. *TO DO: Return error if no user found.
  // returns: {
    // user: {...},
    // pendingConnectionsIncoming: [..],
    // pendingConnectionsOutgoing: [..],
    // acceptedConnections: [..],
    // suggestedConnections: [..],
  // }
  .get(function(req, res) {
    var userId = req.url.slice(1);
    // first get our user
    db.findUserById(userId, function(user) {
      var user = user;
      // then get all users
      // Dev Note: right now, suggestedConnections just returns all users except for the one requesting
      db.findAllUsers(function(allUsers) {
        var suggestedConnections = allUsers.filter((user) => user.dataValues.userId + '' !== userId);
          // then collect all connections where user is source (or initiated the connection)
          db.getConnectionsBySourceId(userId, function(connections) {
            var connectionsAsSource = connections;
            // then collect all connections where user is the target (or was offered a connection)
            db.getConnectionsByTargetId(userId, function(connections) {
              var connectionsAsTarget = connections;
              var pendingConnectionsOutgoing = []; //array of IDs
              var pendingConnectionsIncoming = []; //array of IDs
              var acceptedConnections = [];  //array IDs
              // sort connections as pending/accepted
              connectionsAsSource.forEach(function(connection) {
                if (connection.pending === true) {
                  pendingConnectionsOutgoing.push(connection.targetUserId);
                } else {
                  acceptedConnections.push(connection.targetUserId);
                }
              });
              // sort connections as pending/accepted
              connectionsAsTarget.forEach(function(connection) {
                if (connection.pending === true) {
                  pendingConnectionsIncoming.push(connection.userUserId);
                } else {
                  acceptedConnections.push(connection.userUserId);
                }
              });
              // go from array of connections to array of profiles
              var outgoingProfiles = pendingConnectionsOutgoing.map(function(id) {
                return suggestedConnections.filter(function(profile) {
                  return profile.userId === id;
                })[0];
              })
              // go from array of connections to array of profiles
              var incomingProfiles = pendingConnectionsIncoming.map(function(id) {
                return suggestedConnections.filter(function(profile) {
                  return profile.userId === id;
                })[0];
              })
              // go from array of connections to array of profiles
              var acceptedProfiles = acceptedConnections.map(function(id) {
                return suggestedConnections.filter(function(profile) {
                  return profile.userId === id;
                })[0];
              })
              res.send({
                user: user,
                pendingConnectionsIncoming: incomingProfiles,
                pendingConnectionsOutgoing: outgoingProfiles,
                acceptedConnections: acceptedProfiles,
                suggestedConnections: suggestedConnections
              })
          })
        })
      })
    })
  })




  // deletes user by ID *To Do: Return error if no user found.
  .delete(function(req,res) {
    var userId = req.url.slice(1);
    db.deleteUser(userId, function(result) {
      res.send(result);
    })
  })

module.exports = router;