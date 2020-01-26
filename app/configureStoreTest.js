/**
 * Create the store with dynamic reducers
 */

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createStore } from 'redux';
// import { routerMiddleware } from 'connected-react-router';
// import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
// import createSagaMiddleware from 'redux-saga';
// import createReducer from './reducers';
import reducer from './store/reducer';
import middleware1 from './store/middleware';
// export default function configureAppStore(initialState = {}, history) {
//   const reduxSagaMonitorOptions = {};

//   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
//   const { run: runSaga } = sagaMiddleware;

//   // Create the store with two middlewares
//   // 1. sagaMiddleware: Makes redux-sagas work
//   // 2. routerMiddleware: Syncs the location/URL path to the state
//   const middlewares = [sagaMiddleware, routerMiddleware(history)];

//   const enhancers = [
//     createInjectorsEnhancer({
//       createReducer,
//       runSaga,
//     }),
//   ];

//   const store = configureStore({
//     reducer: createReducer(),
//     preloadedState: initialState,
//     middleware: [...getDefaultMiddleware(), ...middlewares],
//     enhancers,
//   });
//   // Make reducers hot reloadable, see http://mxs.is/googmo
//   /* istanbul ignore next */
//   if (module.hot) {
//     module.hot.accept('./reducers', () => {
//       forceReducerReload(store);
//     });
//   }

//   return store;
// }
const configureStore = initialState => {
  const store = createStore(reducer, initialState, middleware1);
  return store;
};

export default configureStore;
