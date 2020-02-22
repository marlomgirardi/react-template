import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

/**
 * Configure store for production.
 *
 * @param {object} initialState Initial state for production.
 * @returns {object} The redux store object configured for production.
 */
function configureStoreProd(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);
  return store;
}

/**
 * Configure store for development.
 *
 * @param {object} initialState Initial state for development.
 * @returns {object} The redux store object configured for development.
 */
function configureStoreDev(initialState) {
  // Add support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: process.env.DEBUG,
      traceLimit: 15,
    })
    : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(

      // Redux middleware that spits an error on you when you try
      // To mutate your state either inside a dispatch or between dispatches.
      // eslint-disable-next-line global-require,import/no-extraneous-dependencies
      require('redux-immutable-state-invariant').default(),

      ...middleware,
    )),
  );

  // If (module.hot) {
  //     // Enable Webpack hot module replacement for reducers
  //     Module.hot.accept('./reducers', () => {
  //         Store.replaceReducer(require('./reducers').default);
  //     });
  // }

  sagaMiddleware.run(rootSaga);
  return store;
}

export default process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
