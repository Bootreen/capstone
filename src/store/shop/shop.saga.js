import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getShopDatabase } from '../../utils/firebase/firebase.utils';
import { fetchDatabaseFailed, fetchDatabaseSuccess} from './shop.action';
import { SHOP_ACTIONS } from './shop.types';

export function* fetchDatabaseAsync() {
  try {
    const [shopDatabase] = yield call(getShopDatabase);
    yield put(fetchDatabaseSuccess(shopDatabase));
  } catch (error) {
    yield put(fetchDatabaseFailed(error));
  }
};

export function* onFetchDatabase() {
  yield takeLatest(SHOP_ACTIONS.FETCH_DATABASE_START, fetchDatabaseAsync)
};

export function* shopSaga() {
  yield all([call(onFetchDatabase)])
};