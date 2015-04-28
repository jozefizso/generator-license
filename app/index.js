'use strict';
var ini = require('ini');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var LicenseGenerator = module.exports = function LicenseGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  try {
    // fs.exists is being deprecated
    this.gitc = ini.parse(this.readFileAsString(path.join(this.getUserHome(), '.gitconfig')));
  } catch (e) {
    this.gitc = {user: {}};
  }
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
        message: 'Please, enter your name:',
        default: this.gitc.user.name
      },
      {
        name: 'email',
        message: 'Please, enter your email:',
        default: this.gitc.user.email
      },
      {
        name: 'website',
        message: 'Please, enter your website address (optional):'
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
    this.author = props.name;
    if (props.email) {
      this.author += ' <' + props.email + '>';
    }
    if (props.website) {
      this.author += ' (' + props.website + ')';
    }
    this.author = this.author.trim();

    this.template(filename, 'LICENSE');
    cb();
  }.bind(this));
};

LicenseGenerator.prototype.getUserHome = function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
};
