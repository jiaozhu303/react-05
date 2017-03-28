/* 入口启动文件 */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux';

import store from './redux/Store';
import RootApp from './containers/RootApp';

import DevTool from './containers/DevTool';

render(<Provider store={store}>
    <div>
        <DevTool />
        <RootApp />
    </div>
</Provider>, document.querySelector("#app"));