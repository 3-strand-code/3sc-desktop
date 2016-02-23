import _ from 'lodash'
import log from './log'

const grade = (assignment) => {
  // prereqs
  _.each(assignment.prereqs, grade)

  log(assignment.title)

  // steps
  _.each(assignment.steps, step => {
    step.check()
      ? log.pass(step.title)
      : log.fail(step.title)
  })
}
export default grade
