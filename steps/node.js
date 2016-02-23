import verify from './../lib/verify'

const node = {}

node.install = () => ({
  title: 'Install Node.js',
  instructions: 'node-install.md',
  check: () => verify.node.exists(),
})

export default node
