import { verify } from '../lib'

const node = {}

node.install = () => (dir) => ({
  title: 'Install Node.js',
  check: () => verify.node.exists(),
})

export default node
