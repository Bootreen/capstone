import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getShopDatabase } from '../../utils/firebase/firebase.utils.js';
import { fetchDatabaseFailed, fetchDatabaseSucsess} from './shop.action.js';
import { SHOP_ACTIONS } from './shop.types.js';

export function* fetchDatabaseAsync() {
  try {
    const shopDatabase = yield call(getShopDatabase);
    yield put(fetchDatabaseSucsess(shopDatabase));
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