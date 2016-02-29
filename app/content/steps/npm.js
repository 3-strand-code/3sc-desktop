import { verify } from '../lib'

const npm = {}

npm.install = () => (dir) => ({
  title: 'Install NPM (comes with node.js)',
  check: () => verify.npm.exists(),
})

npm.init = () => (dir) => ({
  title: 'Initialize npm',
  check: () => verify.fileExists('package.json', dir),
})

export default npm
