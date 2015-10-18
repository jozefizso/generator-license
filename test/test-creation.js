/* global __dirname */
/* global describe, before, it */
'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('license:app - generate Apache 2.0 license', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        year: '2015'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'Apache-2.0'
      })
      .on('end', done);
  });

  it('creates LICENSE file using Apache 2.0 template', function () {
    assert.fileContent('LICENSE', 'Apache License, Version 2.0');
    assert.fileContent('LICENSE', 'Copyright 2015 Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with Apache 2.0 license', function () {
    assert.fileContent('package.json', '"license": "Apache-2.0"');
  });
});

describe('license:app - generate BSD 2 license', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        year: '2015'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'BSD-2-Clause-FreeBSD'
      })
      .on('end', done);
  });

  it('creates LICENSE file using BSD 2 template', function () {
    assert.fileContent('LICENSE', 'FreeBSD Project');
    assert.fileContent('LICENSE', 'Copyright (c) 2015, Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with BSD 2 license', function () {
    assert.fileContent('package.json', '"license": "BSD-2-Clause-FreeBSD"');
  });
});

describe('license:app - generate BSD 3 license', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        year: '2015'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'BSD-3-Clause'
      })
      .on('end', done);
  });

  it('creates LICENSE file using BSD 3 template', function () {
    assert.fileContent('LICENSE', 'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"');
    assert.fileContent('LICENSE', 'Copyright (c) 2015, Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with BSD 3 license', function () {
    assert.fileContent('package.json', '"license": "BSD-3-Clause"');
  });
});

describe('license:app - generate ISC license', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        year: '2015'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'ISC'
      })
      .on('end', done);
  });

  it('creates LICENSE file using ISC template', function () {
    assert.fileContent('LICENSE', 'THE SOFTWARE IS PROVIDED "AS IS"');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with ISC license', function () {
    assert.fileContent('package.json', '"license": "ISC"');
  });
});

describe('license:app - generate MIT license', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        year: '2015'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .on('end', done);
  });

  it('creates LICENSE file using MIT template', function () {
    assert.fileContent('LICENSE', 'The MIT License (MIT)');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with MIT license', function () {
    assert.fileContent('package.json', '"license": "MIT"');
  });
});

describe('license:app - generate copyrighted license', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        year: '2015'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'nolicense'
      })
      .on('end', done);
  });

  it('creates LICENSE file using nolicense template', function () {
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with no license', function () {
    assert.noFileContent('package.json', '"license"');
    assert.fileContent('package.json', '"private": true');
  });
});

describe('license:app - generate unlicense license', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        year: '2015'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'unlicense'
      })
      .on('end', done);
  });

  it('creates LICENSE file using unlicense template', function () {
    assert.fileContent('LICENSE', 'This is free and unencumbered software released into the public domain.');
  });
  it('creates package.json file with unlicense license', function () {
    assert.fileContent('package.json', '"license": "unlicense"');
  });
});
