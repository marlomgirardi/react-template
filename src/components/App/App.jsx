import { hot } from "react-hot-loader/root"; // eslint-disable-line import/no-extraneous-dependencies

import React, { useState } from "react";
import styled from "styled-components";
import ErrorBoundary from "../ErrorBoundary";

const AppWrapper = styled.div`
    background: #000000;
    color: #ffffff;
    padding: 10px;
    text-align: center;
`;

const App = () => {
    const [count, setCount] = useState(0); // eslint-disable-line no-magic-numbers

    return (
        <ErrorBoundary>
            <AppWrapper>
                <h1>Hello React!</h1>
                <div>
                    <button onClick={() => setCount(count + 1)}>+1</button>
                    <p>{count}</p>
                </div>
            </AppWrapper>
        </ErrorBoundary>
    );
};

export default hot(App);
