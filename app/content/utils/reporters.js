import _ from 'lodash'
import log from './log'

const reporters = {}

/**
 * Log mocha inspired results to the console.
 * @param {{}} graded The result of a grade(assignment, dir) call.
 */
reporters.mocha = (graded) => {
  const reportAssignment = (prereq) => {
    log(prereq.title)

    _.each(prereq.steps, step => step.check
      ? log.pass(step.title)
      : log.fail(step.title)
    )
  }

  // meta
  log.heading(`Dir: ${graded.dir}`)

  // prereqs
  _.each(graded.assignment.prereqs, reportAssignment)

  // assignment
  reportAssignment(graded.assignment)
}

/**
 * Log formatted JSON.
 * @param {{}} graded The result of a grade(assignment, dir) call.
 */
reporters.json = (graded) => {
  log(JSON.stringify(graded, null, 2))
}

export default reporters
