#!/usr/bin/env node

const _ = require('lodash')
const fs = require('fs')
const log = require('../utils/log')

exports.description = 'assert directories exists'

exports.fn = (yargs, argv) => {
  argv = yargs
    .usage('Usage: $0 [options]')
    .demand(1)
    .option('paths', {
      alias: 'p',
      description: 'Paths to verify exist'
    })
    .array('paths')
    .help('help')
    .argv

  if (!pathsExist(argv.paths)) {
    process.exit(1)
  }
}

/**
 * Verify files or folders exist.
 */
const pathsExist = (paths, cb) => {
  if (!paths) return
  const found = []
  const notFound = []

  // find
  _.each(paths, (path) => {
    try {
      fs.accessSync(path, fs.F_OK)
      found.push(path)
    } catch (e) {
      notFound.push(path)
    }
  })

  // show results
  if (!_.isEmpty(found)) {
    log('Exists')
    found.forEach(dir => log.pass(dir))
  }

  if (!_.isEmpty(notFound)) {
    log('Does not exist')
    notFound.forEach(dir => log.fail(dir))
    process.exit(1)
  }

  // callback
  return _.isEmpty(notFound)
}
