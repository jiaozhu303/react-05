import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import CounterReduce from './CounterReduce';
import thunk from 'redux-thunk';
import DevTool from '../containers/DevTool';

import middlewareDemo from '../middleware/middlewareDemo';

//store
let count = 0;
// applyMiddleware  第一种用法
// let store = createStore(CounterReduce, count, applyMiddleware(createLogger()));
let enhancer = compose(applyMiddleware(middlewareDemo, thunk), DevTool.instrument());
let store = createStore(CounterReduce, count, enhancer);
//applyMiddleware 第二种用法
// let finalStore = applyMiddleware(createLogger())(createStore);
// let store = finalStore(CounterReduce);
export default store;