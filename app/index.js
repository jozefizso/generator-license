'use strict';
var _ = require('lodash');
var generators = require('yeoman-generator');
var gitConfig = require('git-config');

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

    var choices = [
      { name: 'Apache 2.0', value: 'Apache-2.0' },
      { name: 'MIT', value: 'MIT' },
      { name: 'Unlicense', value: 'Unlicense' },
      { name: 'FreeBSD', value: 'BSD-2-Clause-FreeBSD' },
      { name: 'NewBSD', value: 'BSD-3-Clause' },
      { name: 'Internet Systems Consortium (ISC)', value: 'ISC' },
      { name: 'No License (Copyrighted)', value: 'nolicense' },
      { name: 'GNU General Public License 2.0', value: 'GPL-2.0' },
      { name: 'GNU General Public License 3.0', value: 'GPL-3.0' },
      { name: 'GNU Lesser General Public License 2.1', value: 'LGPL-2.1' },
      { name: 'GNU Lesser General Public License 3.0', value: 'LGPL-3.0' },
      { name: 'GNU Affero General Public License 3.0', value: 'AGPL-3.0' },
      { name: 'What the Fuck Public License', value: 'WTFPL' },
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
      this.props = _.extend({
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
});
