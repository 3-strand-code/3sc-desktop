import { verify } from '../lib'
import npmInitMD from './npm-init.md'

const npm = {}

npm.install = () => (dir) => ({
  title: 'Install npm (comes with node.js)',
  check: () => verify.npm.exists(),
})

npm.init = () => (dir) => ({
  title: 'Initialize npm',
  description: npmInitMD,
  check: () => verify.fileExists('package.json', dir),
})

npm.installModule = (name) => (dir) => ({
  title: `npm install ${name}`,
  check: () => verify.dirExists(`node_modules/${name}`, dir),
})

export default npm
