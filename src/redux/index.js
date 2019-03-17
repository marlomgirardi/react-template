// eslint-disable global-require */
// global require, module, window, process */

import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

function configureStoreProd(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [ sagaMiddleware ];

    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware)),
    );

    sagaMiddleware.run(rootSaga);
    return store;
}

function configureStoreDev(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    // add support for Redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middleware = [
        // Redux middleware that spits an error on you when you try
        // to mutate your state either inside a dispatch or between dispatches.
        require('redux-immutable-state-invariant').default(),

        sagaMiddleware
    ];

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware)),
    );

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('./reducers', () => {
    //         store.replaceReducer(require('./reducers').default);
    //     });
    // }

    sagaMiddleware.run(rootSaga);
    return store;
}

export default process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;
