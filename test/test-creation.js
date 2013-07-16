/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var _s      = require('underscore.string');


function makeRegExp() {
  var message = _s.sprintf.apply(this, arguments);
  var escaped = message.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  return new RegExp(escaped);
}

describe('license generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('license:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files - Apache license', function (done) {

    helpers.mockPrompt(this.app, {
      'name': 'Test User',
      'license': 'apache'
    });

    this.app.run({}, function () {
      var regex = makeRegExp("Copyright %d Test User", new Date().getFullYear());
      helpers.assertFile('LICENSE', regex);
      helpers.assertFile('LICENSE', /Apache License, Version 2\.0/);
      done();
    });

  });

  it('creates expected files - FreeBSD license', function (done) {

    helpers.mockPrompt(this.app, {
      'name': 'Test User',
      'license': 'freebsd'
    });

    this.app.run({}, function () {
      var regex = makeRegExp("Copyright (c) %d, Test User", new Date().getFullYear());
      helpers.assertFile('LICENSE', regex);
      helpers.assertFile('LICENSE', /FreeBSD Project/);
      done();
    });

  });

  it('creates expected files - NewBSD license', function (done) {

    helpers.mockPrompt(this.app, {
      'name': 'Test User',
      'license': 'newbsd'
    });

    this.app.run({}, function () {
      var regex = makeRegExp("Copyright (c) %d, Test User", new Date().getFullYear());
      helpers.assertFile('LICENSE', regex);
      done();
    });

  });

  it('creates expected files - MIT license', function (done) {

    helpers.mockPrompt(this.app, {
      'name': 'Test User',
      'license': 'mit'
    });

    this.app.run({}, function () {
      var regex = makeRegExp("Copyright (c) %d Test User", new Date().getFullYear());
      helpers.assertFile('LICENSE', makeRegExp("The MIT License (MIT)"));
      helpers.assertFile('LICENSE', regex);
      done();
    });

  });

  it('creates expected files - ISC license', function (done) {

    helpers.mockPrompt(this.app, {
      'name': 'Test User',
      'license': 'isc'
    });

    this.app.run({}, function () {
      var regex = makeRegExp("Copyright (c) %d Test User", new Date().getFullYear());
      helpers.assertFile('LICENSE', regex);
      done();
    });

  });
});
