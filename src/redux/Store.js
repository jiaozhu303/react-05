import {createStore} from 'redux';
import CounterReduce from './CounterReduce';
//store
let count = 0;
let store = createStore(CounterReduce, count);
export default store;

