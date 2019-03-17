import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './redux';
import App from './components/App';

import './styles/index.scss';

// TODO: Initial State
const store = configureStore({});

ReactDOM.render(
    (
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>
    ),
    document.getElementById('app')
);

module.hot && module.hot.accept();
