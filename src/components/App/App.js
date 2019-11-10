import { hot } from 'react-hot-loader/root'

import React, { PureComponent } from 'react'
import ErrorBoundary from '../ErrorBoundary'
import style from './App.scss'

class App extends PureComponent {
    state = {
        count: 0
    }

    onClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <ErrorBoundary>
                <div className={style.app}>
                    <h1>Hello React!</h1>
                    <div>
                        <button onClick={this.onClick}>+1</button>
                        <p>{this.state.count}</p>
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js') // eslint-disable-line max-len

    whyDidYouRender(React)
}


export default hot(App)
