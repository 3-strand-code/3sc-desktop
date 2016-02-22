import verify from './../lib/verify'

const node = {}

node.install = () => ({
  title: 'Install Node.js',
  check: () => verify.node.exists(),
})

export default node
