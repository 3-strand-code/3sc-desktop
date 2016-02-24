import verify from './../lib/verify'
import steps from '../steps'

const assignment = {
  uid: 'setup-a-web-app-project-1',
  title: 'Setup a web app project',
  steps: [
    steps.git.init(),
    {
      title: 'Create an /app directory',
      check: (dir) => verify.dirExists('app', dir),
    },
    {
      title: 'Create an index.html file in /app',
      check: (dir) => verify.fileExists('app/index.html', dir),
    },
    steps.npm.init(),
    steps.git.ignore(),
  ],
}

export default assignment
