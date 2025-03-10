import { takeLatest, put, all, call } from 'redux-saga/effects';
import { USER_ACTIONS } from './user.types';
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed } from './user.action';
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInDefault,
  createAuthUserWithEmailAndPassword,
  signOutUser
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInDefault, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
};

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGoogleRedirect);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
};

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
};

export function* signUp({payload: { email, password, displayName }}) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
};

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
};

export function* signInAfterSignUp({payload: { user, additionalDetails }}) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
};

export function* onSignInEmailStart() {
  yield takeLatest(USER_ACTIONS.SIGN_IN_EMAIL_START, signInWithEmail);
};

export function* onSignInGoogleStart() {
  yield takeLatest(USER_ACTIONS.SIGN_IN_GOOGLE_START, signInWithGoogle);
};

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* onSignUpStart() {
  yield takeLatest(USER_ACTIONS.SIGN_UP_START, signUp);
};

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTIONS.SIGN_UP_SUCCESS, signInAfterSignUp);
};

export function* onSignOutStart() {
  yield takeLatest(USER_ACTIONS.SIGN_OUT_START, signOut);
};

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignInGoogleStart),
    call(onSignInEmailStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart)
  ])
};