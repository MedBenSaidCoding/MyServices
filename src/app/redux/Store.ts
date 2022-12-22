import {createStore, applyMiddleware} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import {rootSaga} from './sagas/rootSaga'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware()
const storeOld = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

const persistConfig = {
  key: 'authType',
  storage: storage,
  whitelist: ['authType','professionals','currentUser','searchSinglePro'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: pReducer,
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
export const persistor = persistStore(store);
export default store
