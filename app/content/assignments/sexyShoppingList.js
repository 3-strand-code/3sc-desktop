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
  ],
  sections: [
    setupNewProject,
    setupAppProject,
    {
      title: 'CSS Preprocessor',
      steps: [
        steps.npm.installModule('node-sass'),
      ],
    },
  ],
}

export default assignment
