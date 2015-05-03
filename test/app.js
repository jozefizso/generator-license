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
        license: 'mit'
      })
      .on('end', done);
  });

  it('creates LICENSE file', function () {
    assert.fileContent('LICENSE', 'MIT');
    assert.fileContent('LICENSE', 'Rick <foo@example.com> (http://example.com)');
  });
});

describe('license:app with options', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        license: 'mit'
      })
      .withOptions({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com'
      })
      .on('end', done);
  });

  it('creates LICENSE file', function () {
    assert.fileContent('LICENSE', 'MIT');
    assert.fileContent('LICENSE', 'Rick <foo@example.com> (http://example.com)');
  });
});
