import _ from 'lodash'
import log from './utils/log'
import grade from './utils/grade'
import * as reporters from './utils/reporters'
import assignments from './assignments'
import path from 'path'

const dir = path.resolve(__dirname, '../sexy-shopping-list')
const graded = grade(assignments.sexyShoppingList, dir)

log.title('JSON Reporter')
reporters.json(graded)

log.title('Mocha Reporter')
reporters.mocha(graded)
