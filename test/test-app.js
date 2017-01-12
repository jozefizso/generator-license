/* global __dirname */
/* global describe, before, it */
'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('license:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .toPromise();
  });

  it('creates LICENSE file', function () {
    assert.file('LICENSE');
  });
  it('does not create package.json file', function () {
    assert.noFile('package.json');
  });
});

describe('license:app with package.json', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
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
      .withOptions({
        force: true
      })
      .on('end', done);
  });

  it('creates LICENSE file', function () {
    assert.file('LICENSE');
  });
  it('updates package.json file with license', function () {
    assert.fileContent('package.json', '"license": "MIT"');
  });
});

describe('license:app with options', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        license: 'ISC'
      })
      .withOptions({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        force: true
      })
      .on('end', done);
  });

  it('creates LICENSE file', function () {
    assert.fileContent('LICENSE', 'ISC');
    assert.fileContent('LICENSE', 'Rick <foo@example.com> (http://example.com)');
  });
  it('does not create package.json file', function () {
    assert.noFile('package.json');
  });
});

describe('license:app set to nolicense with package.json', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        licensePrompt: 'Choose a license',
        license: 'nolicense'
      })
      .withOptions({
        force: true
      })
      .toPromise();
  });

  it('makes npm module private', function () {
    assert.noFileContent('package.json', '"license"');
    assert.fileContent('package.json', '"private": true');
  });
});

