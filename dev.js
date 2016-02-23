import _ from 'lodash'
import log from './utils/log'
import grade from './utils/grade'
import sexyShoppingList from './assignments/sexyShoppingList'

console.log(JSON.stringify(grade(sexyShoppingList), null, 2))
