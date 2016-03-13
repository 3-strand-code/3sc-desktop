import { verify } from '../../lib'
import steps from '../../steps'
import setupAppProjectMD from './setup-app-project.md'

const assignment = {
  title: 'Setup a web app project',
  description: setupAppProjectMD,
  visible: false,
  steps: [
    (dir) => ({
      title: 'Create an /app directory',
      check: () => verify.dirExists('app', dir),
    }),
    (dir) => ({
      title: 'Create an index.html file in /app',
      check: () => verify.fileExists('app/index.html', dir),
    }),
    steps.git.ignore('build/'),
  ],
}

export default assignment
