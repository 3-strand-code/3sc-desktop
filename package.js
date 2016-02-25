/* eslint-disable strict */
'use strict'

const os = require('os')
const webpack = require('webpack')
const cfg = require('./webpack.production.babel')
const packager = require('electron-packager')
const del = require('del')
const cp = require('child_process')
const argv = require('minimist')(process.argv.slice(2))
const pkg = require('./package.json')
const createDebugger = require('./app/utils/debug').createDebugger

const devDeps = Object.keys(pkg.devDependencies)
const exec = cp.exec
const debug = createDebugger('package')
const error = createDebugger('package:error')

const appName = argv.name || argv.n || pkg.productName
const shouldUseAsar = argv.asar || argv.a || false
const shouldBuildAll = argv.all || false

const DEFAULT_OPTS = {
  dir: './',
  name: appName,
  asar: shouldUseAsar,
  ignore: [
    '/test($|/)',
    '/tools($|/)',
    '/release($|/)',
  ].concat(devDeps.map(name => `/node_modules/${name}($|/)`)),
}

const icon = argv.icon || argv.i || 'app/app'

if (icon) {
  DEFAULT_OPTS.icon = icon
}

const version = argv.version || argv.v

function log(plat, arch) {
  return (err, filepath) => {
    if (err) return error(err)
    debug(`${plat}-${arch} finished!`)
  }
}

function pack(plat, arch, cb) {
  // there is no darwin ia32 electron
  if (plat === 'darwin' && arch === 'ia32') return

  const iconObj = {
    icon: DEFAULT_OPTS.icon + (() => {
      let extension = '.png'
      if (plat === 'darwin') {
        extension = '.icns'
      } else if (plat === 'win32') {
        extension = '.ico'
      }
      return extension
    })(),
  }

  const opts = Object.assign({}, DEFAULT_OPTS, iconObj, {
    platform: plat,
    arch,
    prune: true,
    out: `release/${plat}-${arch}`,
  })

  packager(opts, cb)
}

function build(paths) {
  if (shouldBuildAll) {
    // build for all platforms
    const archs = ['ia32', 'x64']
    const platforms = ['linux', 'win32', 'darwin']

    platforms.forEach(plat => {
      archs.forEach(arch => {
        pack(plat, arch, log(plat, arch))
      })
    })
  } else {
    // build for current platform only
    pack(os.platform(), os.arch(), log(os.platform(), os.arch()))
  }
}

function startPack() {
  debug('start pack...')
  webpack(cfg, (webpackErr, stats) => {
    if (webpackErr) return error(webpackErr)
    del('release')
      .then(build)
      .catch(error)
  })
}

if (version) {
  DEFAULT_OPTS.version = version
  startPack()
} else {
  // use the same version as the currently-installed electron-prebuilt
  exec('npm list electron-prebuilt', (err, stdout) => {
    if (err) {
      DEFAULT_OPTS.version = '0.36.2'
    } else {
      DEFAULT_OPTS.version = stdout.split('electron-prebuilt@')[1].replace(/\s/g, '')
    }

    startPack()
  })
}
