import { hot } from 'react-hot-loader/root'; // eslint-disable-line import/no-extraneous-dependencies

import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import style from './App.scss';

const App = () => {
  const [count, setCount] = useState(0); // eslint-disable-line no-magic-numbers

  return (
    <ErrorBoundary>
      <div className={style.app}>
        <h1>Hello React!</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>+1</button>
          <p>{count}</p>
        </div>
      </div>
    </ErrorBoundary>
  );
};


export default hot(App);
