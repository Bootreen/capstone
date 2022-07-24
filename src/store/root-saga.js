import { all, call } from 'redux-saga/effects';
import { shopSaga } from './shop/shop.saga.js';

export function* rootSaga() {
  yield all([call(shopSaga)])
};