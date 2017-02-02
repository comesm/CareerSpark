var Sequelize = require('sequelize');
var sequelize = new Sequelize('UserDb','root','');

//define model

var Users = sequelize.define('users', {
  userId: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  password: Sequalize.STRING,
  phone: Sequelize.INTEGER,
  tagline: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  location: Sequelize.STRING,
  field: Sequelize.STRING,
  company: Sequelize.STRING,
  profileImageUrl: Sequelize.STRING
});


var Connections = sequelize.define('connections', {
  connectionId: {primaryKey: true, type: Sequelize.INTEGER,
    autoIncrement: true},
  pending: Sequelize.BOOLEAN
 });

//join table initiate
 Users.belongsToMany(Users, {as: 'Target', through: Connections})


Users.sync();

Connections.sync();


exports.Users = Users;
exports.Connections = Connections;
// exports.sequelize = sequelize;