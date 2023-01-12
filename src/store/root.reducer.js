import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { shopReducer } from './shop/shop.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  cart: cartReducer
});