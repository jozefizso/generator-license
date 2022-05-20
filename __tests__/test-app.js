'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('license:app', () => {
  it('does not create new package.json', () => {
    return helpers
      .run(require.resolve('../app'))
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .then(() => {
        assert.file('LICENSE');
        assert.noFile('package.json');
      });
  });

  it('edit pre-existing package.json', () => {
    return helpers
      .run(require.resolve('../app'))
      .inTmpDir(function (dir) {
        const done = this.async();
        const fs = require('fs');
        fs.writeFile(path.join(dir, 'package.json'), '{}', done);
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      .then(() => {
        assert.file('LICENSE');
        assert.fileContent('package.json', '"license": "MIT"');
      });
  });

  it('with author options: --name --email --website', () => {
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
      .then(() => {
        assert.fileContent('LICENSE', 'ISC');
        assert.fileContent('LICENSE', 'Rick <foo@example.com> (http://example.com)');
        assert.noFile('package.json');
      });
  });

  it('makes npm module private when license selected is UNLICENSED', () => {
    return helpers
      .run(require.resolve('../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
        fs.writeFileSync(path.join(dir, 'package.json'), '{}');
      })
      .withPrompts({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        licensePrompt: 'Choose a license',
        license: 'UNLICENSED'
      })
      .then(() => {
        assert.fileContent('package.json', '"license": "UNLICENSED"');
        assert.fileContent('package.json', '"private": true');
      });
  });

  it('--output change the destination directory', () => {
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
      .then(() => {
        assert.file('src/license.txt');
        assert.noFile('LICENSE');
      });
  });
});
