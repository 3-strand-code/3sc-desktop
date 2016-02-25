import verify from '../lib/verify'
import steps from '../steps'

const assignment = {
  uid: 'setup-your-system-1',
  title: 'Setup Your System',
  steps: [
    steps.git.install(),
    steps.node.install(),
  ],
}

export default assignment
