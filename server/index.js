var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// import two routers
var userRouter = require('./routers/users.js');
var connectionRouter = require('./routers/connections.js');


app.use(bodyParser.json());

// Serves up main page
app.use('/', express.static(__dirname + '/../client/dist'));

// Serves up static images. To GET image 1, direct URL to http://localhost:3000/images/1.jpg
app.use('/images', express.static(__dirname + '/../server/assets'))

// URL ending for GET/POST requests for User (e.g., when creating new user)
app.use('/api/users', userRouter);

//URL ending for GET/POST requests for Connetions (e.g., when two users connect)
app.use('/api/connections', connectionRouter);


app.listen(3000, function() {
  console.log('listening on port 3000');
});
