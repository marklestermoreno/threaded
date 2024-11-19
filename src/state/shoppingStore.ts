import { createStore } from 'redux';
import shoppingCartReducer from './shoppingReducer';

const store = createStore(shoppingCartReducer);

export default store;
