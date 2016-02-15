#!/usr/bin/env node

const chalk = require('chalk')
const _ = require('lodash')

const INDENT = ' '

// basic log
const log = (...args) => console.log.apply(console, [INDENT, ...args])

// status logs
log.pass = (...args) => log.apply(log, [INDENT, chalk.green('✔'), ...args])
log.fail = (...args) => log.apply(log, [INDENT, chalk.red('✘'), ...args])
log.warn = (...args) => log.apply(log, [INDENT, chalk.yellow('!!'), ...args])

// command logs
log.commandError = (yargs, message) => console.log('Error:', message, '\n\n', yargs.help())

module.exports = log
