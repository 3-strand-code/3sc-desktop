import verify from '../src/lib/verify'

const git = {}

git.install = () => (dir) => ({
  title: 'Install git',
  check: (dir) => verify.git.exists(),
})

// TODO config.username and config.email steps

// TODO accept items to ignore
git.ignore = () => (dir) => ({
  title: 'Add .gitignore',
  check: (dir) => verify.fileExists('.gitignore', dir),
})

git.init = () => (dir) => ({
  title: 'Initialize a git repo',
  check: (dir) => verify.git.repo.exists(dir),
})

git.createRemote = (name) => (dir) => ({
  title: `Create a git ${name} remote`,
  check: (dir) => verify.git.remote.exists(remote, dir),
})

git.useSSH = (remote) => (dir) => ({
  title: `Create a git remote named ${remote}`,
  check: (dir) => verify.git.remote.isSSH(remote, dir),
})

export default git
