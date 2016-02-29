import { verify } from '../lib'
import steps from '../steps'

const assignment = {
  title: 'Setup a web app project',
  visible: false,
  steps: [
    steps.git.init(),
    (dir) => ({
      title: 'Create an /app directory',
      check: () => verify.dirExists('app', dir),
    }),
    (dir) => ({
      title: 'Create an index.html file in /app',
      check: () => verify.fileExists('app/index.html', dir),
    }),
    steps.npm.init(),
    steps.git.ignore(),
  ],
}

export default assignment
