import { verify } from '../lib'
import nodeInstallMD from './node-install.md'

const node = {}

node.install = () => (dir) => ({
  title: 'Install Node.js',
  description: nodeInstallMD,
  check: () => verify.node.exists(),
})

export default node
