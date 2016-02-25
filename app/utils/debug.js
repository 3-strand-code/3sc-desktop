// in production use a faux debug function
const debug = process.env.NODE_ENV === 'production' ? () => ({}) : require('debug/browser')

debug.enable('3sc:*')

// Simple log
// import debug from 'utils/debug'
// debug('Some message')
const _debug = debug('app:log')

// Namespaced debugger
// import {makeDebugger} from 'utils/debug'
// const debug = makeDebugger('app:namespace')
//
// debug('Some message')
_debug.createDebugger = debug

module.exports = _debug
