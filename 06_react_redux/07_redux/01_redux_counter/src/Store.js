import { createStore } from 'redux';
import counterRedux from './Reducer';

const store = createStore(counterRedux);

export default store;
