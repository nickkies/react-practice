import { call, put, take } from "redux-saga/effects";

// take => action을 기다림
function* loginFlow() {
  while ( true ) {
    const { id, password } = yield take(types.LOGIN);
    const userInfo = yield call(callApiLogin, id, password);
    yield put(types.SET_USER_INFO, userInfo);
    yield take(types.LOGOUT);
    yield call(callApiLogout, id);
    yield put(types.SET_USER_INFO, null);
  }
}