import shell from 'shelljs'
import fs from 'fs'

const verify = {}

// ------------------------------------
// Low level
// ------------------------------------

// File System

/**
 * Verify path is a directory.
 * @param {String} path
 */
verify.dirExists = (path) => shell.test('-d', path)

/**
 * Verify path is a file.
 * @param {String} path
 */
verify.fileExists = (path) => shell.test('-f', path)

/**
 * Verify a cli is available.
 * @param {String} command Command
 */
verify.cliExists = (command) => !!shell.which(command)

// ------------------------------------
// High level
// ------------------------------------

// Git

verify.git = {
  exists: () => verify.cliExists('git'),
  remote: {
    exists: (remote) => {
      const remotes = shell.exec(`git remote`).stdout
      return remotes.includes(remote)
    },
    isSSH: (remote) => {
      const sshRegEx = /git@github\.com:.*\/.*\.git/
      const remoteUrl = shell.exec(`git config --list remote.${remote}.url`).stdout
      return sshRegEx.test(remoteUrl)
    },
  },
  // TODO: add config verification
  // - validate username and email are set
  // - validate push.default, simple:
  repo: {
    exists: () => verify.dirExists('.git'),
  }
}

// Node

verify.node = {
  exists: () => verify.cliExists('node') && verify.cliExists('npm')
}

export default verify
