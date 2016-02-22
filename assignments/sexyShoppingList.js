import verify from './../lib/verify'
import steps from '../steps'
import setupAppProject from './setupAppProject'
import setupYourSystem from './setupYourSystem'

const assignment = {
  title: 'Sexy Shopping List',
  prereqs: [
    setupYourSystem,
    setupAppProject,
  ],
  steps: [
    // TODO Redirect root index.html to build/index.html',
  ],
}

export default assignment
