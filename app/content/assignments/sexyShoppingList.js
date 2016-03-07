import { verify } from '../lib'
import setupYourSystem from './setupYourSystem'
import setupAppProject from './setupAppProject'
import steps from '../steps'

const assignment = {
  title: 'Sexy Shopping List',
  visible: true,
  prereqs: [
    setupYourSystem,
    setupAppProject,
  ],
  steps: [
    (dir) => ({
      title: 'Add a README.md',
      check: () => verify.fileExists('README.md', dir),
    }),
    (dir) => ({
      title: 'Create index.html',
      check: () => verify.fileExists('index.html', dir),
    }),
    // TODO Redirect root index.html to build/index.html',
    steps.npm.installModule('node-sass'),
  ],
}

export default assignment
