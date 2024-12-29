import { describe } from 'vitest'
import helpers from 'yeoman-test'
import { test } from './yo-test.js'


describe('license:app - generate Apache 2.0 license', () => {
  test('creates LICENSE file using Apache 2.0 template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'Apache-2.0'
      })

    result.assertFileContent('LICENSE', 'Apache License, Version 2.0')
    result.assertFileContent('LICENSE', 'Copyright 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "Apache-2.0"')
  })
})

describe('license:app - generate Apache 2.0 license with 2013-2015 year', () => {
  test('creates LICENSE file using Apache 2.0 template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2013-2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'Apache-2.0'
      })

    result.assertFileContent('LICENSE', 'Apache License, Version 2.0')
    result.assertFileContent('LICENSE', 'Copyright 2013-2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "Apache-2.0"')
  })
})

describe('license:app - generate BSD 2 license', () => {
  test('creates LICENSE file using BSD 2 template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'BSD-2-Clause-FreeBSD'
      })

    result.assertFileContent('LICENSE', 'FreeBSD Project')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "BSD-2-Clause-FreeBSD"')
  })
})

describe('license:app - generate BSD 3 license', () => {
  test('creates LICENSE file using BSD 3 template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'BSD-3-Clause'
      })

    result.assertFileContent('LICENSE', 'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "BSD-3-Clause"')
  })
})

describe('license:app - generate ISC license', () => {
  test('creates LICENSE file using ISC template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'ISC'
      })

    result.assertFileContent('LICENSE', 'THE SOFTWARE IS PROVIDED "AS IS"')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "ISC"')
  })
})

describe('license:app - generate GNU AGPL 3.0 license', () => {
  test('creates LICENSE file using AGPL-3.0 template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'AGPL-3.0'
      })

    result.assertFileContent('LICENSE', 'GNU AFFERO GENERAL PUBLIC LICENSE')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "AGPL-3.0"')
  })
})

describe('license:app - generate MIT license', () => {
  test('creates LICENSE file using MIT template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })

    result.assertFileContent('LICENSE', 'The MIT License (MIT)')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "MIT"')
  })
})

describe('license:app - generate MPL 2.0 license', () => {
  test('creates LICENSE file using MPL 2.0 template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MPL-2.0'
      })

    result.assertFileContent('LICENSE', 'Mozilla Public License Version 2.0')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "MPL-2.0"')
  })
})

describe('license:app - generate copyrighted license', () => {
  test('creates LICENSE file using UNLICENSED template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'UNLICENSED'
      })

    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "UNLICENSED"')
    result.assertFileContent('package.json', '"private": true')
  })
})

describe('license:app - generate Unlicense license', () => {
  test('creates LICENSE file using Unlicense template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'Unlicense'
      })

    result.assertFileContent('LICENSE', 'This is free and unencumbered software released into the public domain.')
    result.assertFileContent('package.json', '"license": "Unlicense"')
  })
})

describe('license:app - generate GPL-3.0 license', () => {
  test('creates LICENSE file using GPL-3.0 template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'GPL-3.0'
      })

    result.assertFileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "GPL-3.0"')
  })
})

describe('license:app - generate LGPL-3.0 license', () => {
  test('creates LICENSE file using LGPL-3.0 template and also contains GPL-3.0', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'LGPL-3.0'
      })

    // Both licenses must be included when using LGPL
    // the test below is intended to check for both licenses as both are
    // included in the file
    result.assertFileContent('LICENSE', 'GNU LESSER GENERAL PUBLIC LICENSE')
    result.assertFileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "LGPL-3.0"')
  })
})

describe('license:app - generate GPL-3.0 license via option', () => {
  test('creates LICENSE file using GPL-3.0 template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true,
        license: 'GPL-3.0'
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com'
      })

    result.assertFileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "GPL-3.0"')
  })
})

describe('license:app - generate GPL-3.0 license invalid option', () => {
  test('creates LICENSE file using GPL-3.0 template', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withOptions({
        year: '2015',
        force: true,
        license: 'NOTVALID'
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'GPL-3.0'
      })

    result.assertFileContent('LICENSE', 'GNU GENERAL PUBLIC LICENSE')
    result.assertFileContent('LICENSE', 'Copyright (c) 2015 Rick <foo@example.com> (http://example.com)')
    result.assertFileContent('package.json', '"license": "GPL-3.0"')
  })
})
