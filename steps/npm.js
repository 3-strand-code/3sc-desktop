import verify from './../lib/verify'

const npm = {}

npm.install = () => ({
  title: 'Install NPM (comes with node.js)',
  check: () => verify.npm.exists(),
})

npm.init = () => (    {
  title: 'Initialize npm',
  check: () => verify.fileExists('package.json'),
})

export default npm
