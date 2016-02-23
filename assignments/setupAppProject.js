import verify from './../lib/verify'
import steps from '../steps'

const assignment = {
  title: 'Setup a web app project',
  steps: [
    steps.git.init(),
    {
      title: 'Create an /app directory',
      check: () => verify.dirExists('app'),
    },
    {
      title: 'Create an index.html file in /app',
      check: () => verify.fileExists('app/index.html'),
    },
    steps.npm.init(),
    steps.git.ignore(),
  ],
}

export default assignment
