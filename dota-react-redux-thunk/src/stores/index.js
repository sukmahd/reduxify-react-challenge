import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import heroReducer from '../reducers/heroReducer'

const middleware = applyMiddleware(logger, thunk)

const store = createStore(heroReducer, middleware)

export default store
