import verify from './../lib/verify'

const node = {}

node.install = (dir) => ({
  title: 'Install Node.js',
  instructions: 'node-install.md',
  check: (dir) => verify.node.exists(),
})

export default node
