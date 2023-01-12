import { all, call } from 'redux-saga/effects';
import { shopSaga } from './shop/shop.saga';
import { userSagas } from './user/user.saga';

export function* rootSaga() {
  yield all([call(shopSaga), call(userSagas)])
};