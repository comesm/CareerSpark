var model = require('../index.js');


/****
USER CONTROLLERS 
****/

exports.findAllUsers = function(callback) {
  model.Users.findAll().then(function(result) {
     callback(result);
  })
}

exports.findUserById = function(id, callback) {
  model.Users.findOne({
    where: {
      userId: id
    }
  }).then(function(results) {callback(results)});
}

exports.findAllUsersByLocation = function(location, callback) {
  model.Users.findAll({where: {location: location}}).
    then(function(results) {callback(results)});
}

exports.findAllUsersByLocationAndField = function(location, field, callback) {
  model.Users.findAll({where: {location: location, field: field}}).
    then(function(results) {callback(results)});
}

exports.findAllUsersByCompany = function(company, callback) {
  model.Users.findAll({where: {company: company }}).
    then(function(results) {callback(results)});
}

exports.addUser = function(user, callback) {
  model.Users.create(user).then(function(result) {
    callback(result);
  });
}

exports.deleteUser = function(userId, callback) {
  model.Users.destroy({where: {userId: userId}}).then
    (function(result) {callback(result)});
}

/****
  Connection Controllers
****/
exports.addConnection = function(myUserId, connectionId, callback) {
  model.Connections.create({userUserId: myUserId,
    ConnectionUserId: connectionId})
      .save(function(result) {callback(result)});
}

exports.getConnections = function(userId, callback) {
  model.Connections.findAll({where:  {userUserId:userId}})
    .then(function(result) {callback(result)});
}

exports.deleteConnection = function(userId, connectionId, callback) {
  model.Connections.destroy({where:{userUserId:userId, ConnectionUserId: connectionId}})
}



