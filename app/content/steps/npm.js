import npmInitMD from './npm-init.md'
import { verify } from '../lib'
import loadJsonFile from 'load-json-file'

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

npm.installDependency = (name) => (dir) => ({
  title: `npm install ${name} --save`,
  check: () => {
    const pkg = loadJsonFile.sync(`${dir}/package.json`)
    const isSaved = !!(pkg.dependencies && pkg.dependencies[`${name}`])
    const isInstalled = verify.dirExists(`node_modules/${name}`, dir)
    return isInstalled && isSaved
  },
})

npm.installDevDependency = (name) => (dir) => ({
  title: `npm install ${name} --save-dev`,
  check: () => {
    const pkg = loadJsonFile.sync(`${dir}/package.json`)
    const isSaved = !!(pkg.devDependencies && pkg.devDependencies[`${name}`])
    const isInstalled = verify.dirExists(`node_modules/${name}`, dir)
    return isInstalled && isSaved
  },
})

export default npm
