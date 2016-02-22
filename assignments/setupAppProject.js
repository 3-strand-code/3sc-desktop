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
    {
      title: 'Initialize npm',
      check: () => verify.fileExists('package.json'),
    },
    steps.git.ignore(),
    {
      title: 'Add a README.md',
      check: () => verify.fileExists('README.md'),
    },
  ],
}

export default assignment
