import assert from 'yeoman-assert'
import { describe, it } from 'vitest'
import { licenses as licensesToTest } from '../app'

describe('Ensure all valid licenses have templates', () => {
  licensesToTest.forEach((license) => {
    const expectedLicenseFilename = license.value + '.txt'

    it(`license ${license.name} have corresponding template file ${expectedLicenseFilename}`, () => {
      assert.file(require.resolve('../app/templates/' + expectedLicenseFilename))
    })
  })
})
