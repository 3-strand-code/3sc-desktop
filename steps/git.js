import verify from './../lib/verify'

const git = {}

git.install = () => ({
  title: 'Install git',
  check: () => verify.git.exists(),
})

// TODO config.username and config.email steps

// TODO accept items to ignore
git.ignore = () => ({
  title: 'Add .gitignore',
  check: () => verify.fileExists('.gitignore'),
})

git.init = () => ({
  title: 'Initialize a git repo',
  check: () => verify.git.repo.exists(),
})

git.createRemote = (name) => ({
  title: `Create a git ${name} remote`,
  check: () => verify.git.remote.exists(remote),
})

git.useSSH = (remote) => ({
  title: `Create a git remote named ${remote}`,
  check: () => verify.git.remote.isSSH(remote),
})

export default git
