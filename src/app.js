/* 入口启动文件 */
import React from 'react'
import { render } from 'react-dom'

const App = () => {
    return (<h1>hello react 05!</h1>);
};


const root = document.getElementById('app');

render( <App />, root );
