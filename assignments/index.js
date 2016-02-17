const _ = require('lodash')
const assignments = require('require-dir')()

const results = _.map(assignments, assignment => assignment())

console.log(JSON.stringify(results, null, 2))
