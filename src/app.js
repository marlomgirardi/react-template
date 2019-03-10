import React from 'react';
import style from './style.scss';

class App extends React.Component {
    state = {
        test: 1
    }
    render() {
        const o = { a: 1, b: 2, c: 3 };
        const { a, ...rest } = o;

        return <div className={style.test}>Hello React! {JSON.stringify(rest)}</div>;
    }
}

export default App;
