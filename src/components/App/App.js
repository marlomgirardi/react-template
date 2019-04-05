import React from 'react';
import style from './App.scss';

class App extends React.Component {
    state = {
        count: 0
    };

    onClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div className={style.app}>
                <h1>Hello React!</h1>
                <div>
                    <button onClick={this.onClick}>+1</button>
                    <p>{this.state.count}</p>
                </div>
            </div>
        );
    }
}

export default App;
