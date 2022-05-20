'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('license:app - generate Apache 2.0 license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using Apache 2.0 template', () => {
    assert.fileContent('LICENSE', 'Apache License, Version 2.0');
    assert.fileContent('LICENSE', 'Copyright 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "Apache-2.0"');
  });
});

describe('license:app - generate Apache 2.0 license with 2013-2015 year', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using Apache 2.0 template', () => {
    assert.fileContent('LICENSE', 'Apache License, Version 2.0');
    assert.fileContent('LICENSE', 'Copyright 2013-2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "Apache-2.0"');
  });
});

describe('license:app - generate BSD 2 license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using BSD 2 template', () => {
    assert.fileContent('LICENSE', 'FreeBSD Project');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "BSD-2-Clause-FreeBSD"');
  });
});

describe('license:app - generate BSD 3 license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using BSD 3 template', () => {
    assert.fileContent('LICENSE', 'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "BSD-3-Clause"');
  });
});

describe('license:app - generate ISC license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using ISC template', () => {
    assert.fileContent('LICENSE', 'THE SOFTWARE IS PROVIDED "AS IS"');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "ISC"');
  });
});

describe('license:app - generate GNU AGPL 3.0 license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using AGPL-3.0 template', () => {
    assert.fileContent('LICENSE', 'GNU AFFERO GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "AGPL-3.0"');
  });
});

describe('license:app - generate MIT license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using MIT template', () => {
    assert.fileContent('LICENSE', 'The MIT License (MIT)');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "MIT"');
  });
});

describe('license:app - generate MPL 2.0 license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using MPL 2.0 template', () => {
    assert.fileContent('LICENSE', 'Mozilla Public License Version 2.0');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "MPL-2.0"');
  });
});

describe('license:app - generate copyrighted license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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
        license: 'UNLICENSED'
      });
  });

  it('creates LICENSE file using UNLICENSED template', () => {
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "UNLICENSED"');
    assert.fileContent('package.json', '"private": true');
  });
});

describe('license:app - generate Unlicense license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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
        license: 'Unlicense'
      });
  });

  it('creates LICENSE file using Unlicense template', () => {
    assert.fileContent('LICENSE', 'This is free and unencumbered software released into the public domain.');
    assert.fileContent('package.json', '"license": "Unlicense"');
  });
});

describe('license:app - generate GPL-3.0 license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using GPL-3.0 template', () => {
    assert.fileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "GPL-3.0"');
  });
});

describe('license:app - generate LGPL-3.0 license', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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
        license: 'LGPL-3.0'
      });
  });

  it('creates LICENSE file using LGPL-3.0 template and also contains GPL-3.0', () => {
    // Both licenses must be included when using LGPL
    // the test below is intended to check for both licenses as both are
    // included in the file
    assert.fileContent('LICENSE', 'GNU LESSER GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "LGPL-3.0"');
  });
});

describe('license:app - generate GPL-3.0 license via option', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using GPL-3.0 template', () => {
    assert.fileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "GPL-3.0"');
  });
});

describe('license:app - generate GPL-3.0 license invalid option', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .inTmpDir((dir) => {
        const fs = require('fs');
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

  it('creates LICENSE file using GPL-3.0 template', () => {
    assert.fileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE');
    assert.fileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)');
    assert.fileContent('package.json', '"license": "GPL-3.0"');
  });
});
