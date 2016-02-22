import verify from '../lib/verify'
import steps from '../steps'

const assignment = {
  title: 'Setup Your System',
  steps: [
    steps.git.install(),
    steps.node.install(),
  ],
}

export default assignment
