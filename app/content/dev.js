import path from 'path'
import _ from 'lodash'

import assignments from 'app/assignments'
import { log, grad, reporters } from 'app/utils'

const dir = path.resolve(__dirname, '../sexy-shopping-list')
const graded = grade(assignments.sexyShoppingList, dir)

log.title('JSON Reporter')
reporters.json(graded)

log.title('Mocha Reporter')
reporters.mocha(graded)
