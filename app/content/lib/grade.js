import _ from 'lodash'
import invariant from 'invariant'

const grade = (assignment, dir) => {
  invariant(dir, 'dir is required')

  return {
    ...assignment,
    prereqs: _.map(assignment.prereqs, (prereq) => grade(prereq, dir)),
    sections: _.map(assignment.sections, (section) => grade(section, dir)),
    steps: _.map(assignment.steps, (step) => {
      const stepForDir = step(dir)
      return {
        ...stepForDir,
        check: stepForDir.check(),
      }
    }),
  }
}

export default grade
