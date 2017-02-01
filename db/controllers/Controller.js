var model = require('../index.js');


// //write our queries
// //retrieve all users
exports.getUserId = function(username, callback) {
  model.Users.findAll({where: {username: username}}).then(function(result) {
     callback(result[0].dataValues.userId);
  });
}

exports.findAllUsers = function(callback) {
  model.Users.findAll().then(function(result) {
     callback(result);
  })
}

exports.findUserByUserName = function(username, callback) {
  model.Users.findAll({where: {username: username}}).
    then(function(results) {callback(results)});
}

exports.findAllUsersByLocation = function(location, callback) {
  model.Users.findAll({where: {location: location}}).
    then(function(results) {callback(results)});
}

exports.findAllUsersByLocationAndField = function(location, field, callback) {
  model.Users.findAll({where: {location: location, field: field}}).
    then(function(results) {callback(results)});
}

exports.addConnection = function(myUserId, connectionId, callback) {
  model.Connections.create({userUserId: myUserId,
    ConnectionUserId: connectionId})
      .save(function(result) {callback(result)});
}

exports.findAllUsersByCompany = function(company, callback) {
  model.Users.findAll({where: {company: company }}).
    then(function(results) {callback(results)});
}

exports.addUser = function(user, callback) {
  model.Users.create(user).then(function(result) {
   // console.log(result);
    callback(result);
  });
}

exports.deleteUser = function(userId, callback) {
  model.Users.destroy({where: {userId: userId}}).then
    (function(result) {callback(result)});
}

exports.getConnections = function(userId, callback) {
  model.Connections.findAll({where:  {userUserId:userId}})
    .then(function(result) {callback(result)});
}

//delete a connection
exports.deleteConnection = function(userId, connectionId, callback) {
  model.Connections.destroy({where:{userUserId:userId, ConnectionUserId: connectionId}})
}



