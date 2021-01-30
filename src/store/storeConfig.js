import { createStore, combineReducers } from 'redux';

import cartItemsReducer from './reducers/cartItemsReducer';

const reducers = combineReducers({
  cartItems: cartItemsReducer
})

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;