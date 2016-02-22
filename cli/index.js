#!/usr/bin/env node

var _ = require('lodash')
const commands = require('require-dir')('./commands')
const log = require('././log')
const yargs = require('yargs')

yargs
  .usage('Usage: $0 <command>')
  .demand(1)

// add ./commands
_.each(commands, (exported, name) => {
  yargs.command(name, exported.description, exported.fn)
})

// get args
const argv = yargs.argv

// show help if using non-existing command
const command = argv._[0]
if (!_.some(commands, (exported, name) => name === command)) {
  log.commandError(yargs, `${command} is not a sub command`)
}
