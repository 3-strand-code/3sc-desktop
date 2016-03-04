import _ from 'lodash'
import cp from 'child_process'

export const execSync = (cmd) => cp.execSync(cmd, { encoding: 'utf-8' })

export const getShell = () => execSync('echo $SHELL')

export const sh = (cmd) => execSync(`${getShell()} ${cmd}`)

export const getEnv = () => {
  return sh('env')
    .split('\n')
    .reduce((prev, curr) => {
      const i = curr.indexOf('=')
      const key = curr.slice(0, i)
      const val = curr.slice(i + 1, curr.length)
      if (!key && !val) return prev
      prev[key] = val
      return prev
    }, {})
}

export const getPath = () => {
  const env = getEnv()
  return env.path || env.Path || env.PATH
}

// --------------------------------------
// Commands
// --------------------------------------

export const which = (cmd) => sh(`which ${cmd}`)
