const shell = require('shelljs')
const fs = require('fs')

/**
 * Verify a file or folder exists.
 * @param {String} path Path to assert exists.
 */
exports.pathExists = (path) => {
  try {
    fs.accessSync(path, fs.F_OK)
    return true
  } catch (e) {
    return false
  }
}

/**
 * Verify a cli is available.
 * @param {String} command Command
 */
exports.cliExists = (command) => {
  return !!shell.which(command)
}
