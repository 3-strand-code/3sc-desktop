import _ from 'lodash'
import log from './log'
import verify from '../lib/verify'

const grade = (assignment) => {
  const gradedAssignment = {
    uid: assignment.uid,
    prereqs: [],
    steps: [],
  }

  // prereqs
  _.each(assignment.prereqs, prereq => {
    gradedAssignment.prereqs.push(grade(prereq))
  })

  // log(assignment.title)

  // steps
  _.each(assignment.steps, step => {
    gradedAssignment.steps.push({
      ...step,
      check: step.check()
    })
    // step.check()
    //   ? log.pass(step.title)
    //   : log.fail(step.title)
  })

  return gradedAssignment
}

export default grade

// example result
const results = {
  assignments: [
    {
      uid: 'sexy-shopping-list-1',
      prereqs: [
        {
          uid: 'setup-your-system-1',
          steps: [
            {
              title: 'Add a README.md',
              check: true,
            },
            {
              title: 'Create index.html',
              check: true,
            },
          ],
        },
        {
          uid: 'setup-a-web-app-project-1',
          steps: [
            {
              title: 'Add a README.md',
              check: true,
            },
            {
              title: 'Create index.html',
              check: true,
            },
          ],
        },
      ],
      steps: [
        {
          title: 'Add a README.md',
          check: true,
        },
        {
          title: 'Create index.html',
          check: true,
        },
      ],
    }
  ]
}
