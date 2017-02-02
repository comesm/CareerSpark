var express = require('express');
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var app = express();
// import two routers
var userRouter = require('./routers/users.js');
var connectionRouter = require('./routers/connections.js');


app.use(fileUpload());
app.use(bodyParser.json());

// Serves up main page
app.use('/', express.static(__dirname + '/../client/dist'));

// Serves up profile images
app.use('/images', express.static(__dirname + '/../server/assets'))
  // GET http://localhost:3000/images/1.jpg ==> returns image for user 1

// URL ending for Users
app.use('/api/users', userRouter);
  // GET http://localhost:3000/api/users  ==> returns all users
  // GET http://localhost:3000/api/users/1  ==> returns data for user 1 (user, and connections info)
  // POST http://localhost:3000/api/users  ==> posts new user to database, saves image to storage

//URL ending for Connetions
app.use('/api/connections', connectionRouter);
  // GET http://localhost:3000/api/connections  ==> returns all connections (both pending and not pending)
  // GET http://localhost:3000/api/connections/1  ==> accepts connection with ID of 1 (changes pending to false)

app.listen(3000, function() {
  console.log('listening on port 3000');
});
