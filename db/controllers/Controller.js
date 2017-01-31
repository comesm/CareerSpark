var model = require('../index.js');


// //write our queries
// //retrieve all users

exports.findAllUsers = function(callback) {

  model.Users.findAll().then(function(result) {
    callback(result);
  })
}

var addConnection = function(myUserId, connectionId, callback) {
  model.Connections.create({userUserId: myUserId,
    ConnectionUserId: connectionId})
      .save(function(result) {callback(result)});
}

var findAllUsersByCompany = function(company, callback) {
  model.Users.findAll({where: {company: company }}).
    then(function(results) {callback(results)});
  }

exports.addUser = function(user, callback) {
  model.Users.create(user).save(function(result) {
    callback(result);
  });
}

var deleteUser = function(userId, callback) {
  model.Users.destroy({where: {userId: userId}}).then
    (function(result) {callback(result)});
}

var getConnections = function(userId, callback) {
  model.Connections.findAll({where:  {userUserId:userId}})
    .then(function(result) {callback(result)});
}

//delete a connection
var deleteConnection = function(userId, connectionId, callback) {
  model.Connections.destroy({where:{userUserId:userId, ConnectionUserId: connectionId}})
}

var findAllUsersByLocation = function(location, callback) {
  model.Users.findAll({where: {location: location}}).
    then(function(results) {callback(results)});
  }

var findAllUsersByLocationAndField = function(location, field, callback) {
  model.Users.findAll({where: {location: location, field: field}}).
    then(function(results) {callback(results)});
  }

