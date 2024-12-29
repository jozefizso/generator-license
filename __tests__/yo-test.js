import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { test as base } from 'vitest'
import helpers from 'yeoman-test'

export const test = base.extend({
  appLocation: path.join(fileURLToPath(import.meta.url), '../../app'),
  // app: async ({ appLocation }, use) => {
  //   let app = helpers.create(appLocation)
  //   await use(app)
  // }
})
