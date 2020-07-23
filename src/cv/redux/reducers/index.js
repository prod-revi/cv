import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import account from './account'

export default combineReducers({
  account,
  todos,
  visibilityFilter
})
