var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//import our controller for db operations, also connects to DB
//var UserDbController = require('../db/controllers/Users.js');
var ConnectionsDbController = require('../db/controllers/Connections.js');

app.use(bodyParser.json());


//interact here with db or add routes elsewhere to keep code modularized
//hypothetically, db operations would be delegated to these routes


app.use('/', express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('listening on port 3000');
});
