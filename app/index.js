'use strict';
var _ = require('lodash');
var generators = require('yeoman-generator');
var gitConfig = require('git-config');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('name', {
      description: 'Name of the license owner',
      required: false
    });

    this.option('email', {
      description: 'Email of the license owner',
      required: false
    });

    this.option('website', {
      description: 'Website of the license owner',
      required: false
    });
  },

  initializing: function () {
    this.gitc = gitConfig.sync();
    this.gitc.user = this.gitc.user || {};
  },

  prompting: function () {
    var done = this.async();

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
          message: 'What\'s your name:',
          default: this.options.name || this.gitc.user.name,
          when: !this.options.name
        },
        {
          name: 'email',
          message: 'Your email (optional):',
          default: this.options.email || this.gitc.user.email,
          when: !this.options.email
        },
        {
          name: 'website',
          message: 'Your website (optional):',
          default: this.options.website,
          when: !this.options.website
        },
        {
          type: 'list',
          name: 'license',
          message: 'Which license do you want to use?',
          choices: choices
        }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    var filename = this.props.license + '.txt';
    var author = this.props.name.trim();
    if (this.props.email) {
      author += ' <' + this.props.email.trim() + '>';
    }
    if (this.props.website) {
      author += ' (' + this.props.website.trim() + ')';
    }

    this.fs.copyTpl(
      this.templatePath(filename),
      this.destinationPath('LICENSE'),
      {
        year: (new Date()).getFullYear(),
        author: author
      }
    );
  }
});
