var express = require('express');
var router = express.Router();

// import db Controllers
var db = require('../../db/controllers/Controller.js');


// when URL ending is: .../api/connections
router.route('/')
  .get(function(req, res) {
     // TO DO: sends back all connections
     res.send('To Do: fill in request');
  });

// when URL ending is, e.g.: /api/connections/14
router.route('/:id')
  .get(function(req, res) {
  	// To Do: Sends back all connections that involve User 14
  	res.send('To Do: fill in request');
  });

module.exports = router;