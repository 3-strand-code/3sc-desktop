import path from 'path'

const exported = {}
// require all files in this directory, except for index.js
const context = require.context('./', true, /\.js$/)

context
  .keys()
  .forEach(key => {
    if (key.includes('/index.js')) return
    exported[path.basename(key, '.js')] = context(key)
  })

export default exported
