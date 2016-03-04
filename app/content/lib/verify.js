import sh from 'shelljs'
import path from 'path'
import * as shell from './shell'

const verify = {}

// ------------------------------------
// Low level
// ------------------------------------

/**
 * Verify path is a directory.
 * @param {String} relPath A relative path in `cwd`.
 * @param {String} cwd Current working directory.
 * @returns {Boolean}
 */
verify.dirExists = (relPath, cwd = __dirname) => {
  return sh.test('-d', path.resolve(cwd, relPath))
}

/**
 * Verify path is a file.
 * @param {String} relPath A relative path in `cwd`.
 * @param {String} cwd Current working directory.
 * @returns {Boolean}
 */
verify.fileExists = (relPath, cwd = __dirname) => {
  return sh.test('-f', path.resolve(cwd, relPath))
}

/**
 * Verify a cli is available.
 * @param {String} command Shell command to verify exists.
 * @returns {Boolean}
 */
verify.cliExists = (command) => !!shell.which('git')

// ------------------------------------
// High level
// ------------------------------------

// Git

verify.git = {
  exists: () => verify.cliExists('git'),
  remote: {
    exists: (remote, cwd = __dirname) => {
      sh.cd(cwd)
      const remotes = sh.exec(`git remote`).stdout
      return remotes.includes(remote)
    },
    isSSH: (remote, cwd = __dirname) => {
      sh.cd(cwd)
      const sshRegEx = /git@github\.com:.*\/.*\.git/
      const remoteUrl = sh.exec(`git config --list remote.${remote}.url`).stdout
      return sshRegEx.test(remoteUrl)
    },
  },
  // TODO: add config verification
  // - validate username and email are set
  // - validate push.default, simple:
  repo: {
    exists: (cwd = __dirname) => verify.dirExists('.git', cwd),
  },
}

// Node

verify.node = {
  exists: () => verify.cliExists('node') && verify.cliExists('npm'),
}

export default verify
