/* 入口启动文件 */
import React, {Component, PropTypes} from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider, connect} from 'react-redux';

import store from './redux/Store';
import RootApp from './containers/RootApp';

render(<Provider store={store}>
    <RootApp />
</Provider>, document.querySelector("#app"));