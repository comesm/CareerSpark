var Sequelize = require('sequelize');
var expect = require('chai').expect;
var assert = require('assert');
var controller = require('../db/controllers/Controller.js');
console.log(controller);
var models = require('../db/index.js');

  // userId: {primaryKey: true, type: Sequelize.INTEGER,
  //   autoIncrement: true},
  // phone: Sequelize.INTEGER,
  // username: Sequelize.STRING,
  // tagline: Sequelize.STRING,
  // firstName: Sequelize.STRING,
  // lastName: Sequelize.STRING,
  // location: Sequelize.STRING,
  // image: Sequelize.BLOB,
  // field: Sequelize.STRING,
  // company: Sequelize.STRING


describe('Users', function() {
  before(function(done) {
    models.Users.create({
      phone:8675309,
      username:'comesm',
      tagline:'wowimcool',
      firstName:'michael',
      lastName:'comes',
      location:'SF',
      image:'td',
      field:'engineering',
      company:'HR'

    })
      .save(function() {
        console.log('saved');
        done(null);
      })
      .error(function(error) {
        done(error);
      });
  });

  describe('add User', function() {
    controller.findAllUsers(function(result) {
      console.log('46', result)
    }
    )


  });
});
