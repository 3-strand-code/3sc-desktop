const webpack = require('webpack')
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer')
const baseConfig = require('./webpack.base.babel')

const config = Object.create(baseConfig)

config.debug = true

config.devtool = 'cheap-module-eval-source-map'

config.entry = [
  'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
  './app/index',
]

config.output.publicPath = 'http://localhost:3000/dist/'

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    '__PROD__': false,
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
    },
  })
)

config.target = webpackTargetElectronRenderer(config)

module.exports = config
