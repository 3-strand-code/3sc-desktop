const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.development.babel')
const createDebugger = require('./app/utils/debug').createDebugger

const debug = createDebugger('server')
const app = express()
const compiler = webpack(config)

const PORT = 3000

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,             // with console colors
    hash: true,               // add the hash of the compilation
    version: true,            // add webpack version information
    timings: true,            // add timing information
    assets: true,             // add assets information
    chunks: true,             // add chunk information
    chunkModules: false,      // add built modules information to chunk information
    modules: false,           // add built modules information
    children: false,          // add children information
    cached: false,            // add also information about cached (not built) modules
    reasons: false,           // add information about the reasons why modules are included
    source: false,            // add the source code of modules
    errorDetails: true,       // add details to errors (like resolving log)
    chunkOrigins: false,      // add the origins of chunks and chunk merging info
  },
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'hot-dev-app.html'))
})

app.listen(PORT, 'localhost', err => {
  debug(err ? err : `Listening at http://localhost:${PORT}`)
})
