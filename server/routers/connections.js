var express = require('express');
var router = express.Router();
var db = require('../../db/controllers/Controller.js');

// when URL ending is: .../api/connections
router.route('/')
  // TO DO: GET ALL CONNECTIONS
  .get(function(req, res) {
     db.getAllConnections(function(data) {
     	res.send(data);
     })
  })
  // TO DO: POST CONNECTIONS
  .post(function(req, res) {
  	console.log('post connection called');
  	console.log(req.body);
  	var userId1 = req.body.userId1;
  	var userId2 = req.body.userId2;
  	db.addConnection(userId1,userId2, function() {
  		console.log('added connection');
  		res.send('POST CONNECTION SUCCESS')
  	})
  	
  });

// when URL ending is, e.g.: /api/connections/14
router.route('/:id')
  .get(function(req, res) {
  	// To Do: Sends back all connections that involve User 14
  	res.send('To Do: fill in request');
  });

module.exports = router;