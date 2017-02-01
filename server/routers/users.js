var express = require('express');
var router = express.Router();

// import db Controllers
var db = require('../../db/controllers/Controller.js');


// when URL ending is: .../api/users
router.route('/')
  // sends back an array of all users
  .get(function(req, res) {
     db.findAllUsers(function(data) {
     	res.send(data);
     })
  })
  // posts new user
  .post(function(req, res) {

    // The request body should look like a user. If using Postman, don't forget to select body as JSON.
    // Here's an example of a request body:
    // {
    //   "phone": 8675309,
    //   "username": "RouteTesting",
    //   "tagline": "wowimcool",
    //   "firstName": "michael",
    //   "lastName": "comes",
    //   "location": "SF",
    //   "image": "td",
    //   "field": "engineering",
    //   "company": "HR",
    //   "updatedAt": "2017-01-31T23:33:15.000Z",
    //   "createdAt": "2017-01-31T23:33:15.000Z"
    // }

    var user = req.body;

    db.addUser(user, function(result) {
      res.send(result)
    });
  });

// when URL ending is, e.g.: /api/users/14
router.route('/:id')
  .get(function(req, res) {
  	// To Do: Sends back info on user 14.
  	res.send('To Do: fill in request');
  });

module.exports = router;