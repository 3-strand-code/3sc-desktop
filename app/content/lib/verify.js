import sh from 'shelljs'
import fs from 'fs'
import path from 'path'

const verify = {}

// ------------------------------------
// Low level
// ------------------------------------

// File System

/**
 * Verify path is a directory.
 * @param relPath
 * @param dir
 */
verify.dirExists = (relPath, dir = __dirname) => {
  return sh.test('-d', path.resolve(dir, relPath))
}

/**
 * Verify path is a file.
 * @param relPath
 * @param dir
 */
verify.fileExists = (relPath, dir = __dirname) => {
  return sh.test('-f', path.resolve(dir, relPath))
}

/**
 * Verify a cli is available.
 * @param {String} command Command
 */
verify.cliExists = (command) => !!sh.which(command)

// ------------------------------------
// High level
// ------------------------------------

// Git

verify.git = {
  exists: () => verify.cliExists('git'),
  remote: {
    exists: (remote, dir = __dirname) => {
      sh.cd(dir)
      const remotes = sh.exec(`git remote`).stdout
      return remotes.includes(remote)
    },
    isSSH: (remote, dir = __dirname) => {
      sh.cd(dir)
      const sshRegEx = /git@github\.com:.*\/.*\.git/
      const remoteUrl = sh.exec(`git config --list remote.${remote}.url`).stdout
      return sshRegEx.test(remoteUrl)
    },
  },
  // TODO: add config verification
  // - validate username and email are set
  // - validate push.default, simple:
  repo: {
    exists: (dir = __dirname) => verify.dirExists('.git', dir),
  }
}

// Node

verify.node = {
  exists: () => verify.cliExists('node') && verify.cliExists('npm'),
}

export default verify
