const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer')
const baseConfig = require('./webpack.base.babel')

const config = Object.create(baseConfig)

config.devtool = 'source-map'

config.entry = './app/index'

config.output.publicPath = '../dist/'

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': false,
    '__PROD__': true,
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false,
    },
  }),
  new ExtractTextPlugin('style.css', { allChunks: true })
)

config.target = webpackTargetElectronRenderer(config)

module.exports = config
