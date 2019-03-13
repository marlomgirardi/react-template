import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import './global.scss';

ReactDOM.render(
    (
        <AppContainer>
            <App />
        </AppContainer>
    ),
    document.getElementById('app')
);

module.hot && module.hot.accept();