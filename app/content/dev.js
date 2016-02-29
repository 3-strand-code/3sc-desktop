import path from 'path'

import assignments from './assignments'
import { grade, reporters, log } from './utils'

const dir = path.resolve(__dirname, '../../../sexy-shopping-list')
const graded = grade(assignments.sexyShoppingList, dir)

log.title('JSON Reporter')
reporters.json(graded)

log.title('Mocha Reporter')
reporters.mocha(graded)
