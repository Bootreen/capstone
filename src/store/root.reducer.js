import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer.js';
import { shopReducer } from './shop/shop.reducer.js';

export const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer
});