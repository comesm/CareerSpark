var Sequelize = require('sequelize');
var expect = require('chai').expect;
var assert = require('assert');
var controller = require('../db/controllers/Controller.js');
//var models = require('../db/index.js');


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
  beforeEach(function() {
    controller.addUser({
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
  });

  after(function() {
    console.log('45');
    models.Users.destroy({
      where: {phone:8675309}
    });
  });


    describe('fetch users', function() {
      console.log('53');
      it('should return all added users', function(done) {
        console.log('55')
        controller.findAllUsers(function(results) {
          console.log('57', results);
          //return results;
          expect(results.phone).to.equal('blaslgs');
          done();
        });
      })
    });
  });




