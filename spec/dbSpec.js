var Sequelize = require('sequelize');
var expect = require('chai').expect;
var assert = require('assert');
var controller = require('../db/controllers/Controller.js');
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
  beforeEach(function() {
    return models.Users.create({
      phone:8675309,
      username:'comesm',
      tagline:'wowimcool',
      firstName:'michael',
      lastName:'comes',
      location:'SF',
      image:'td',
      field:'engineering',
      company:'HR'

    }).then(function() {
      return models.Users.create({
      phone:1234567,
      username:'smartPerson12',
      tagline:'hire me please',
      firstName:'Tom',
      lastName:'Smith',
      location:'NJ',
      image:'image path',
      field:'teacher',
      company:'UCSB'

    })
    })
  });

  afterEach(function() {
    models.Users.destroy({where:{}});
  });


    describe('test our query methods', function() {

      it('should return 2 users', function(done) {
        controller.findAllUsers(function(results) {
          expect(results.length).to.equal(2);
          done();
        });
      });

      it('first return should be michael', function(done) {

        controller.findAllUsers(function(results) {
          expect(results[0].dataValues.username).to.equal('comesm');
          done();
        });
      })

       it('should return Tom Smith', function(done) {
        controller.findAllUsersByCompany('UCSB', function(results) {
          console.log('75')
          expect(results[0].dataValues.firstName).to.equal('Tom');
          done();
        });
      });

       it('should return Michael Comes', function(done) {
        controller.findAllUsersByLocation('SF', function(results) {
          console.log('75')
          expect(results[0].dataValues.lastName).to.equal('comes');
          done();
        });
      });

      it('should return Michael Comes', function(done) {
        controller.findAllUsersByLocationAndField('SF', 'engineering', function(results) {
          console.log('75')
          expect(results[0].dataValues.username).to.equal('comesm');
          done();
        });
      });
    });

    describe('test our insert and delete operations', function() {



    })

  });




