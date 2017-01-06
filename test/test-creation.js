/* global __dirname */
/* global describe, before, it */
'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('license:app - generate Apache 2.0 license', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'Apache-2.0'
      })
      .toPromise();
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
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'BSD-2-Clause-FreeBSD'
      })
      .toPromise();
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
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'BSD-3-Clause'
      })
      .toPromise();
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
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'ISC'
      })
      .toPromise();
  });

  it('creates LICENSE file using ISC template', function () {
    assert.fileContent('LICENSE', 'THE SOFTWARE IS PROVIDED "AS IS"');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with ISC license', function () {
    assert.fileContent('package.json', '"license": "ISC"');
  });
});

describe('license:app - generate GNU AGPL 3.0 license', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'AGPL-3.0'
      })
      .toPromise();
  });

  it('creates LICENSE file using AGPL-3.0 template', function () {
    assert.fileContent('LICENSE', 'GNU AFFERO GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015, Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with AGPL-3.0 license', function () {
    assert.fileContent('package.json', '"license": "AGPL-3.0"');
  });
});


describe('license:app - generate MIT license', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .toPromise();
  });

  it('creates LICENSE file using MIT template', function () {
    assert.fileContent('LICENSE', 'The MIT License (MIT)');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with MIT license', function () {
    assert.fileContent('package.json', '"license": "MIT"');
  });
});

describe('license:app - generate MPL 2.0 license', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MPL-2.0'
      })
      .toPromise();
  });

  it('creates LICENSE file using MPL 2.0 template', function () {
    assert.fileContent('LICENSE', 'Mozilla Public License Version 2.0');
    assert.fileContent('LICENSE', 'Copyright (c) 2015, Rick <foo@example.com> (http://example.com)');
  });
  it('creates package.json file with MPL 2.0 license', function () {
    assert.fileContent('package.json', '"license": "MPL-2.0"');
  });
});


describe('license:app - generate copyrighted license', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'nolicense'
      })
      .toPromise();
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
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'unlicense'
      })
      .toPromise();
  });

  it('creates LICENSE file using unlicense template', function () {
    assert.fileContent('LICENSE', 'This is free and unencumbered software released into the public domain.');
  });
  it('creates package.json file with unlicense license', function () {
    assert.fileContent('package.json', '"license": "unlicense"');
  });
});
