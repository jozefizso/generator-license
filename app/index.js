'use strict';
var objectAssign = require('object-assign');
var generators = require('yeoman-generator');
var gitConfig = require('git-config');

var licenses = [
  { name: 'Apache 2.0', value: 'Apache-2.0' },
  { name: 'MIT', value: 'MIT' },
  { name: 'Unlicense', value: 'unlicense' },
  { name: 'FreeBSD', value: 'BSD-2-Clause-FreeBSD' },
  { name: 'NewBSD', value: 'BSD-3-Clause' },
  { name: 'Internet Systems Consortium (ISC)', value: 'ISC' },
  { name: 'No License (Copyrighted)', value: 'nolicense' }
];

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('name', {
      desc: 'Name of the license owner',
      required: false
    });

    this.option('email', {
      desc: 'Email of the license owner',
      required: false
    });

    this.option('website', {
      desc: 'Website of the license owner',
      required: false
    });

    this.option('year', {
      desc: 'Year(s) to include on the license',
      required: false,
      defaults: (new Date()).getFullYear()
    });
  },

  initializing: function () {
    this.gitc = gitConfig.sync();
    this.gitc.user = this.gitc.user || {};
  },

  prompting: function () {
    var done = this.async();

    var choices = licenses;

    var prompts = [
      {
        name: 'name',
        message: 'What\'s your name:',
        default: this.options.name || this.gitc.user.name,
        when: this.options.name == null
      },
      {
        name: 'email',
        message: 'Your email (optional):',
        default: this.options.email || this.gitc.user.email,
        when: this.options.email == null
      },
      {
        name: 'website',
        message: 'Your website (optional):',
        default: this.options.website,
        when: this.options.website == null
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use?',
        choices: choices
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = objectAssign({
        name: this.options.name,
        email: this.options.email,
        website: this.options.website
      }, props);
      done();
    }.bind(this));
  },

  writing: {
    license: function () {
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
          year: this.options.year,
          author: author
        }
      );
    },

    pkg: function () {
      if (!this.fs.exists(this.destinationPath('package.json'))) {
        return;
      }

      var pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
      pkg.license = this.props.license;

      // We don't want users to publish their module to NPM if they copyrighted
      // their content.
      if (this.props.license === 'nolicense') {
        delete pkg.license;
        pkg.private = true;
      }

      this.fs.writeJSON(this.destinationPath('package.json'), pkg);
    }
  }
}, {
  licenses: licenses
});
