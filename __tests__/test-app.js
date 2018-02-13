'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('license:app', function() {
  it('does not create new package.json', function() {
    return helpers
      .run(require.resolve('../app'))
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .then(function() {
        assert.file('LICENSE');
        assert.noFile('package.json');
      });
  });

  it('edit pre-existing package.json', function() {
    return helpers
      .run(require.resolve('../app'))
      .inTmpDir(function(dir) {
        var done = this.async();
        var fs = require('fs');
        fs.writeFile(path.join(dir, 'package.json'), '{}', done);
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .then(function() {
        assert.file('LICENSE');
        assert.fileContent('package.json', '"license": "MIT"');
      });
  });

  it('with author options: --name --email --website', function() {
    return helpers
      .run(require.resolve('../app'))
      .withPrompts({
        license: 'ISC'
      })
      .withOptions({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com'
      })
      .then(function() {
        assert.fileContent('LICENSE', 'ISC');
        assert.fileContent('LICENSE', 'Rick <foo@example.com> (http://example.com)');
        assert.noFile('package.json');
      });
  });

  it('makes npm module private when license selected is UNLICENSED', function() {
    return helpers
      .run(require.resolve('../app'))
      .inTmpDir(function(dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        licensePrompt: 'Choose a license',
        license: 'UNLICENSED'
      })
      .then(function() {
        assert.noFileContent('package.json', '"license"');
        assert.fileContent('package.json', '"private": true');
      });
  });

  it('--output change the destination directory', function() {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withOptions({
        output: 'src/license.txt'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        year: '2015',
        website: 'http://example.com',
        license: 'GPL-3.0'
      })
      .then(function() {
        assert.file('src/license.txt');
        assert.noFile('LICENSE');
      });
  });
});
