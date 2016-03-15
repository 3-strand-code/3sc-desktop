import { verify } from '../../lib'
import setupAppProject from './../setup-app-project/setupAppProject'
import setupNewProject from './../setup-new-project/setupNewProject'
import setupYourSystem from './../setup-your-system/setupYourSystem'
import steps from '../../steps'
import cssPreprocessor from './css-preprocesor.md'

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
      description: cssPreprocessor,
      steps: [
        steps.npm.installDevDependency('node-sass'),
      ],
    },
  ],
}

export default assignment
