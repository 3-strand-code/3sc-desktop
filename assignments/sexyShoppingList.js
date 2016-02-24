import verify from './../lib/verify'
import steps from '../steps'
import setupAppProject from './setupAppProject'
import setupYourSystem from './setupYourSystem'

const assignment = {
  uid: 'sexy-shopping-list-1',
  title: 'Sexy Shopping List',
  prereqs: [
    setupYourSystem,
    setupAppProject,
  ],
  steps: [
    {
      title: 'Add a README.md',
      check: (dir) => verify.fileExists('README.md', dir),
    },
    {
      title: 'Create index.html',
      check: (dir) => verify.fileExists('index.html', dir),
    },
    // TODO Redirect root index.html to build/index.html',
  ],
}

export default assignment
