import { verify } from '../lib'
import steps from '../steps'

const assignment = {
  title: 'Setup a new project',
  visible: false,
  steps: [
    steps.npm.init(),
    steps.git.init(),
    steps.git.ignore(),
    steps.git.ignore('.DS_Store'),
    steps.git.ignore('.idea/'),
    steps.git.ignore('*.log*'),
    steps.git.ignore('node_modules/'),
  ],
}

export default assignment
