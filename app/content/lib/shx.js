import cp from 'child_process'

function shx(str) {
  return cp.execFile(`node node_modules/.bin/shx ${str}`)
}

export default shx
