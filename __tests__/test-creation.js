'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('license:app - generate Apache 2.0 license', function () {
  beforeEach(function () {
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
      });
  });

  it('creates LICENSE file using Apache 2.0 template', function () {
    assert.fileContent('LICENSE', 'Apache License, Version 2.0');
    assert.fileContent('LICENSE', 'Copyright 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "Apache-2.0"');
  });
});

describe('license:app - generate Apache 2.0 license with 2013-2015 year', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2013-2015',
        force: true
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'Apache-2.0'
      });
  });

  it('creates LICENSE file using Apache 2.0 template', function () {
    assert.fileContent('LICENSE', 'Apache License, Version 2.0');
    assert.fileContent('LICENSE', 'Copyright 2013-2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "Apache-2.0"');
  });
});


describe('license:app - generate BSD 2 license', function () {
  beforeEach(function () {
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
      });
  });

  it('creates LICENSE file using BSD 2 template', function () {
    assert.fileContent('LICENSE', 'FreeBSD Project');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "BSD-2-Clause-FreeBSD"');
  });
});

describe('license:app - generate BSD 3 license', function () {
  beforeEach(function () {
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
      });
  });

  it('creates LICENSE file using BSD 3 template', function () {
    assert.fileContent('LICENSE', 'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "BSD-3-Clause"');
  });
});

describe('license:app - generate ISC license', function () {
  beforeEach(function () {
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
      });
  });

  it('creates LICENSE file using ISC template', function () {
    assert.fileContent('LICENSE', 'THE SOFTWARE IS PROVIDED "AS IS"');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "ISC"');
  });
});

describe('license:app - generate GNU AGPL 3.0 license', function () {
  beforeEach(function () {
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
      });
  });

  it('creates LICENSE file using AGPL-3.0 template', function () {
    assert.fileContent('LICENSE', 'GNU AFFERO GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "AGPL-3.0"');
  });
});


describe('license:app - generate MIT license', function () {
  beforeEach(function () {
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
      });
  });

  it('creates LICENSE file using MIT template', function () {
    assert.fileContent('LICENSE', 'The MIT License (MIT)');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "MIT"');
  });
});

describe('license:app - generate MPL 2.0 license', function () {
  beforeEach(function () {
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
      });
  });

  it('creates LICENSE file using MPL 2.0 template', function () {
    assert.fileContent('LICENSE', 'Mozilla Public License Version 2.0');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "MPL-2.0"');
  });
});


describe('license:app - generate copyrighted license', function () {
  beforeEach(function () {
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
      });
  });

  it('creates LICENSE file using nolicense template', function () {
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.noFileContent('package.json', '"license"');
    assert.fileContent('package.json', '"private": true');
  });
});

describe('license:app - generate unlicense license', function () {
  beforeEach(function () {
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
      });
  });

  it('creates LICENSE file using unlicense template', function () {
    assert.fileContent('LICENSE', 'This is free and unencumbered software released into the public domain.');
    assert.fileContent('package.json', '"license": "unlicense"');
  });
});

describe('license:app - generate GPL-3.0 license', function () {
  beforeEach(function () {
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
        license: 'GPL-3.0'
      });
  });

  it('creates LICENSE file using GPL-3.0 template', function () {
    assert.fileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "GPL-3.0"');
  });
});

describe('license:app - generate GPL-3.0 license via option', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true,
        license: 'GPL-3.0'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com'
      });
  });

  it('creates LICENSE file using GPL-3.0 template', function () {
    assert.fileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "GPL-3.0"');
  });
});


describe('license:app - generate GPL-3.0 license invalid option', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .inTmpDir(function (dir) {
        var fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withOptions({
        year: '2015',
        force: true,
        license: 'NOTVALID'
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'GPL-3.0'
      });
  });

  it('creates LICENSE file using GPL-3.0 template', function () {
    assert.fileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "GPL-3.0"');
  });
});
