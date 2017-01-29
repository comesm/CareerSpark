var Sequelize = require('sequelize');
var sequelize = new Sequelize('UserDb','root','');

//define model

var User = sequelize.define('user', {
  userId: {primaryKey: true, type: Sequelize.INTEGER,
    autoIncrement: true},
  username: Sequelize.STRING,
  tagline: Sequelize.STRING
});

User.sync({force: true});

module.exports = User;


//export model for use in ../models/User, where we can execute queries


