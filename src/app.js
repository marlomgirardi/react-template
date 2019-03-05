import React from 'react';
import ReactDOM from 'react-dom';
import style from './st.scss';

const Index = () => {
  return <div className={style.className}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById('app'));

module.hot.accept();
