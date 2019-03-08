import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";

const Index = () => {
    return <div className={style.test}>Hello2 React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));

module.hot.accept();
