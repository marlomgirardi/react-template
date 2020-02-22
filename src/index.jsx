import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux';
import App from './components/App';

import './styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render'); // eslint-disable-line global-require,import/no-extraneous-dependencies

  whyDidYouRender(React);
}

// TODO: Initial State
const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
