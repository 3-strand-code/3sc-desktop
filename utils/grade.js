import _ from 'lodash'
import verify from '../lib/verify'

const grade = (assignment) => {
  // make a new object so we don't mutate the original assignment
  const graded = {...assignment}

  // prereqs
  _.each(graded.prereqs, grade)

  // steps
  _.each(graded.steps, step => step.check = step.check())

  return graded
}

export default grade
