import { all, call } from 'redux-saga/effects';
import { shopSaga } from './shop/shop.saga.js';
import { userSagas } from './user/user.saga.js';

export function* rootSaga() {
  yield all([call(shopSaga), call(userSagas)])
};