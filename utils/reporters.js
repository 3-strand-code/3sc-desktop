import _ from 'lodash'
import log from './log'

/**
 * Log mocha inspired results to the console.
 * @param graded
 */
export const mocha = (graded) => {
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
 * @param graded
 */
export const json = (graded) => {
  return console.log(JSON.stringify(graded, null, 2))
}
