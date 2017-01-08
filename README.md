# generator-license
[![Build Status](https://img.shields.io/travis/jozefizso/generator-license.svg)](https://travis-ci.org/jozefizso/generator-license)
[![NPM version](https://img.shields.io/npm/v/generator-license.svg)](https://www.npmjs.org/package/generator-license)
[![David Dependencies](https://img.shields.io/david/jozefizso/generator-license.svg)](https://david-dm.org/jozefizso/generator-license)
[![David Dev Dependencies](https://img.shields.io/david/dev/jozefizso/generator-license.svg)](https://david-dm.org/jozefizso/generator-license#info=devDependencies)

> Generate LICENSE file for your project using Yeoman.

```
yo license
```


## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-license`
- Run: `yo license`, enter your full name and choose a license

The generator will generate the `LICENSE` file and fill the `license` field of the `package.json`.

### Compose with generator license in your own generator

`generator-license` can be easily embedded into your own generator using [Yeoman composability](http://yeoman.io/authoring/composability.html).

First, install `generator-license` as a dependency of your own generator.

```
npm install --save generator-license
```

Then call it from your generator.

```js
this.composeWith(require.resolve('generator-license'), {
  name: 'John Doe', // (optional) Owner's name
  email: 'john.doe@example.com', // (optional) Owner's email
  website: 'https://example.com', // (optional) Owner's website
  year: '1945', // (optional) License year (defaults to current year)
  defaultLicense: 'MIT', // (optional) Select a default license
});
```

All the options are optional; the generator will prompt for answers when information is not provided.

### Supported licenses

- [Apache 2 License][1]
- [MIT License][2]
- [FreeBSD License][3]
- [NewBSD License][4]
- [ISC License][5]
- [Mozilla Public License 2.0][10]
- [GNU AGPL 3.0 License][8]
- [GNU GPL 3.0 License][9]
- [No License][6]
- [Unlicense][7]

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[1]: http://choosealicense.com/licenses/apache/
[2]: http://choosealicense.com/licenses/mit/
[3]: http://choosealicense.com/licenses/bsd/
[4]: http://choosealicense.com/licenses/bsd-3-clause/
[5]: http://en.wikipedia.org/wiki/ISC_license
[6]: http://choosealicense.com/licenses/no-license/
[7]: http://unlicense.org/
[8]: http://choosealicense.com/licenses/agpl-3.0/
[9]: http://choosealicense.com/licenses/gpl-3.0/
[10]: http://choosealicense.com/licenses/mpl-2.0/
