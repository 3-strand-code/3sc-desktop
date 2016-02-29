import { verify } from '../lib'

const git = {}

git.install = () => (dir) => ({
  title: 'Install git',
  check: () => verify.git.exists(),
})

// TODO config.username and config.email steps

// TODO accept items to ignore
git.ignore = () => (dir) => ({
  title: 'Add .gitignore',
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
