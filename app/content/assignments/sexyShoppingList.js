import { verify } from '../lib'
import setupAppProject from './setupAppProject'
import setupNewProject from './setupNewProject'
import setupYourSystem from './setupYourSystem'
import steps from '../steps'

const assignment = {
  title: 'Sexy Shopping List',
  visible: true,
  prereqs: [
    setupYourSystem,
    setupNewProject,
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
    steps.npm.installModule('node-sass'),
  ],
}

export default assignment
