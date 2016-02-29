import { verify } from '../lib'

const node = {}

node.install = () => (dir) => ({
  title: 'Install Node.js',
  instructions: './node-install.md',
  check: () => verify.node.exists(),
})

export default node
