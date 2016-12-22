/* global __dirname */
/* global describe, before, after, it */
'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const process = require('process');

describe('license:app templates', function () {
  let cwd = null;
  before(function(done) {
    cwd = process.cwd();
    process.chdir(__dirname +'/../');
    done();
  });

  after(function(done) {
    process.chdir(cwd);
    done();
  });

  const app = require('../app');
  const licensesToTest = app.licenses;

  licensesToTest.forEach(function(license) {
    const expectedLicenseFilename = license.value +'.txt';

    it('license '+ license.name +' have corresponding template file '+ expectedLicenseFilename, function () {
      assert.file('app/templates/'+ expectedLicenseFilename);
    });
  });
});
