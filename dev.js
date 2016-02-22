import _ from 'lodash'
import log from './utils/log'
import assignments from './assignments'

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

grade(assignments.sexyShoppingList)
