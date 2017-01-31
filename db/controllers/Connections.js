var ConnectionsModel = require('../index.js');


//put some queries here


var findAll = function(callback) {

  ConnectionsModel.findAll().then(function(result) {
    callback(result);
  });

}

module.exports = findAll;