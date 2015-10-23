/* global __dirname */
/* global describe, before, after, it */
'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var process = require('process');

describe('license:app templates', function () {
  var cwd = null;
  before(function(done) {
    cwd = process.cwd();
    process.chdir(__dirname +'/../');
    done();
  });
  
  after(function(done) {
    process.chdir(cwd);
    done();
  })
  
  var app = require('../app');
  var licensesToTest = app.licenses;
  
  licensesToTest.forEach(function(license) {
    var expectedLicenseFilename = license.value +'.txt';
    
    it('license '+ license.name +' have corresponding template file '+ expectedLicenseFilename, function () {
      assert.file('app/templates/'+ expectedLicenseFilename);
    });
  });
});
