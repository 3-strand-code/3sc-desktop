/* eslint-disable no-console */
import chalk from 'chalk'
import _ from 'lodash'

const INDENT = ' '

// basic log
const log = (...args) => console.log(...[INDENT, ...args])
log.title = (title) => {
  log(_.padEnd(`== ${title} `, 60, '='))
  log()
}
log.heading = (heading) => {
  log(heading)
  log()
}

// status logs
log.pass = (...args) => log(...[INDENT, chalk.green('✔'), ...args])
log.fail = (...args) => log(...[INDENT, chalk.red('✘'), ...args])
log.warn = (...args) => log(...[INDENT, chalk.yellow('!!'), ...args])

// command logs
log.commandError = (yargs, message) => console.log('Error:', message, '\n\n', yargs.help())

export default log
