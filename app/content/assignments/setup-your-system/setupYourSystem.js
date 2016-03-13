import steps from '../../steps'

const assignment = {
  title: 'Setup Your System',
  visible: true,
  steps: [
    // TODO: install WebStorm
    // TODO: make some ~/src dir // project dir
    steps.git.install(),
    steps.node.install(),
  ],
}

export default assignment
