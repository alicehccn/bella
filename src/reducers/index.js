import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import getPark from './getPark'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  getPark
})

export default todoApp
