'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('license:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .on('end', done);
  });

  it('creates LICENSE file', function () {
    assert.fileContent('LICENSE', 'MIT');
    assert.fileContent('LICENSE', 'Rick <foo@example.com> (http://example.com)');
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
        website: 'http://example.com'
      })
      .on('end', done);
  });

  it('creates LICENSE file', function () {
    assert.fileContent('LICENSE', 'ISC');
    assert.fileContent('LICENSE', 'Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "ISC"');
  });
});

describe('license:app with nolicense', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'nolicense'
      })
      .on('end', done);
  });

  it('makes npm module private', function () {
    assert.noFileContent('package.json', '"license"');
    assert.fileContent('package.json', '"private": true');
  });
});
