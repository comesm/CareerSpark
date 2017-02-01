var express = require('express');
var router = express.Router();
var db = require('../../db/controllers/Controller.js');

// when URL ending is: .../api/connections
router.route('/')
  // returns all connections
  .get(function(req, res) {
     db.getAllConnections(function(data) {
     	res.send(data);
     })
  })
  // posts new connection, and returns it. *TO DO: error handling (e.g., when connection already exists)
  .post(function(req, res) {
  	console.log('post connection called');
  	console.log(req.body);
  	var userId1 = req.body.userId1;
  	var userId2 = req.body.userId2;
  	db.addConnection(userId1,userId2, function(result) {
  		res.send(result.dataValues)
  	})
  	
  });

// when URL ending is, e.g.: /api/connections/14
router.route('/:id')
  .get(function(req, res) {
  	// To Do: Sends back all connections that involve User 14
  	res.send('To Do: fill in request');
  });

module.exports = router;