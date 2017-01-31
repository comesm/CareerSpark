var express = require('express');
var router = express.Router();

// import db Controllers
var db = require('../../db/controllers/Controller.js');


// when URL ending is: .../api/users
router.route('/')
  .get(function(req, res) {
     // TO DO: sends back all users (?)
     res.send('api users GET request');
  });

// when URL ending is, e.g.: /api/users/14
router.route('/:id')
  .get(function(req, res) {
  	// To Do: Sends back info on user 14.
  	res.send('To Do: fill in request');
  });

module.exports = router;