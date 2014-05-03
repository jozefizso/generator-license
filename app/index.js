'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var LicenseGenerator = module.exports = function LicenseGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(LicenseGenerator, yeoman.generators.Base);

LicenseGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var choices = [
    { name: 'Apache 2.0', value: 'apache' },
    { name: 'MIT', value: 'mit' },
    { name: 'Unlicense', value: 'unlicense' },
    { name: 'FreeBSD', value: 'freebsd' },
    { name: 'NewBSD', value: 'newbsd' },
    { name: 'Internet Systems Consortium (ISC)', value: 'isc' },
    { name: 'No License (Copyrighted)', value: 'nolicense' }
  ];

  var prompts = [
      {
        name: 'name',
        message: 'Please, enter your name:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please, select desired license:',
        choices: choices
      }
  ];

  this.prompt(prompts, function (props) {
    var filename = props.license + '.txt';

    // data for template
    this.year = (new Date()).getFullYear();
    this.name = props.name;

    this.template(filename, 'LICENSE');
    cb();
  }.bind(this));
};
