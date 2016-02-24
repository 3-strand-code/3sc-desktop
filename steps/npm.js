import verify from './../lib/verify'

const npm = {}

npm.install = (dir) => ({
  title: 'Install NPM (comes with node.js)',
  check: (dir) => verify.npm.exists(),
})

npm.init = (dir) => (    {
  title: 'Initialize npm',
  check: (dir) => verify.fileExists('package.json', dir),
})

export default npm
