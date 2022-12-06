import {createStore, applyMiddleware} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import {rootSaga} from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const storeOld = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
      // prepend and concat calls can be chained
      .concat(logger)
      .concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
export default store
