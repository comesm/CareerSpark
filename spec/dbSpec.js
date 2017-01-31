var Sequelize = require('sequelize');
var expect = require('chai').expect;
var sequelize = new Sequelize('UserDb','root','');
var assert = require('assert');

describe('Users', function() {
  before(function(done) {
    Users.sync({ force : true }) // drops table and re-creates it
      .success(function() {
        done(null);
      })
      .error(function(error) {
        done(error);
      });
  });

  describe('#create', function() {

  });
});
