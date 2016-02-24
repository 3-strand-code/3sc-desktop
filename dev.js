import _ from 'lodash'
import log from './utils/log'
import grade from './utils/grade'
import * as reporters from './utils/reporters'
import sexyShoppingList from './assignments/sexyShoppingList'

const graded = grade(sexyShoppingList)

log.title('JSON Reporter')
reporters.json(graded)

log.title('Mocha Reporter')
reporters.mocha(graded)
