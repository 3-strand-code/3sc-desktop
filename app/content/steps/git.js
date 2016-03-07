import { verify } from '../lib'
import escapeStringRegex from 'escape-string-regexp'

const git = {}

git.install = () => (dir) => ({
  title: 'Install git',
  check: () => verify.git.exists(),
})

// TODO config.username and config.email steps

git.ignore = (string) => (dir) => (string ? {
  title: `Add ${string} to .gitignore`,
  check: () => {
    const escapedString = escapeStringRegex(string)
    const regExp = new RegExp(`^${escapedString}$`, 'gm')
    return verify.fileContains('.gitignore', regExp, dir)
  },
} : {
  title: 'Create a .gitignore file',
  check: () => verify.fileExists('.gitignore', dir),
})

git.init = () => (dir) => ({
  title: 'Initialize a git repo',
  check: () => verify.git.repo.exists(dir),
})

git.createRemote = (name) => (dir) => ({
  title: `Create a git ${name} remote`,
  check: () => verify.git.remote.exists(name, dir),
})

git.useSSH = (remote) => (dir) => ({
  title: `Create a git remote named ${remote}`,
  check: () => verify.git.remote.isSSH(remote, dir),
})

export default git
