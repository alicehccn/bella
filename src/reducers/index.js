import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import getPage from './getPage'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  getPage
})

export default todoApp
