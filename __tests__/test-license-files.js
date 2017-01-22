'use strict';
const assert = require('yeoman-assert');
const licensesToTest = require('../app').licenses;

describe('Ensure all valid licenses have templates', function () {
  licensesToTest.forEach(function (license) {
    const expectedLicenseFilename = license.value + '.txt';
    it('license ' + license.name + ' have corresponding template file ' + expectedLicenseFilename, function () {
      assert.file(require.resolve('../app/templates/' + expectedLicenseFilename));
    });
  });
});
