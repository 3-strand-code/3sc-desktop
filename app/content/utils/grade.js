import _ from 'lodash'
import verify from '../src/lib/verify'
import invariant from 'invariant'

const grade = (assignment, dir) => {
  invariant(dir, 'dir is required')

  // prereqs
  _.each(assignment.prereqs, (prereq) => grade(prereq, dir))

  // steps
  assignment.steps = _.map(assignment.steps, (step) => {
    const _step = _.isFunction(step) ? step(dir) : step
    _step.check = _step.check(dir)
    return _step
  })

  return {
    dir,
    assignment,
  }
}

export default grade
