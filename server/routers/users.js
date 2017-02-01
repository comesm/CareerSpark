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
  // posts new user, and stores profile image to server/assets. Returns user
  .post(function(req, res) {

    // The request body should look like a user.
    // Here's an example of a request body:
    // {
    //   "phone": 8675309,
    //   "username": "RouteTesting",
    //   "tagline": "wowimcool",
    //   "firstName": "michael",
    //   "lastName": "comes",
    //   "location": "SF",
    //   "field": "engineering",
    //   "company": "HR",
    //   "updatedAt": "2017-01-31T23:33:15.000Z",
    //   "createdAt": "2017-01-31T23:33:15.000Z"
    // }
    // The request should also include a file called "profile".

    var user = req.body;
    var userImage = req.files.profile;
    // post user to db
    db.addUser(user, function(result) {
      // store profile image in server/assets
      var userId = result.userId;
      userImage.mv('server/assets/'+ userId + '.jpg', function(err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      })
    });
  });

// when URL ending is /api/users/<id>
router.route('/:id')
  // returns user by ID. *TO DO: Return error if no user found.
  .get(function(req, res) {
    var userId = req.url.slice(1);
    db.findUserById(userId, function(data) {
      res.send(data);
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