import { describe } from 'vitest'
import helpers from 'yeoman-test'
import { test } from './yo-test.js'

describe('license:app', () => {
  test('does not create new package.json', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })

      result.assertFile('LICENSE')
      result.assertNoFile('package.json')
  })

  test('edit pre-existing package.json', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })

      result.assertFile('LICENSE')
      result.assertFileContent('package.json', '"license": "MIT"')
  })

  test('with author options: --name --email --website', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withAnswers({
        license: 'ISC'
      })
      .withOptions({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com'
      })

      result.assertFileContent('LICENSE', 'ISC')
      result.assertFileContent('LICENSE', 'Rick <foo@example.com> (http://example.com)')
      result.assertNoFile('package.json')
  })

  test('makes npm module private when license selected is UNLICENSED', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withFiles({
        'package.json': '{}'
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        licensePrompt: 'Choose a license',
        license: 'UNLICENSED'
      })

      result.assertFileContent('package.json', '"license": "UNLICENSED"')
      result.assertFileContent('package.json', '"private": true')
  })

  test('--output change the destination directory', async ({ appLocation }) => {
    const result = await helpers.create(appLocation)
      .withOptions({
        output: 'src/license.txt'
      })
      .withAnswers({
        name: 'Rick',
        email: 'foo@example.com',
        year: '2015',
        website: 'http://example.com',
        license: 'GPL-3.0'
      })

      result.assertFile('src/license.txt')
      result.assertNoFile('LICENSE')
  })
})
