import { combineReducers } from 'redux'

import counterReducer from './counterReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
  todoStore: todoReducer,
  counterStore: counterReducer
})

export default rootReducer
