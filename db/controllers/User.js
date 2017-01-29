var UserModel = require('../models/User.js');



var findAll = function(callback) {

  UserModel.findAll().then(function(result) {
    callback(result);
  });

}

var addUser = function(userInfo, callback) {
  User.create({username: 'Michael', tagline: 'random job description'}).then(function(result) {
    callback(result);
  })

}


exports.findAll = findAll;
exports.addUser = addUser;
