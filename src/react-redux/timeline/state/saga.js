import { all, call, put, takeLeading } from 'redux-saga/effects';
import { actions, types } from '../../timeline/state';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

export default function* () {
  // takeLeading => 처리중인 action이 있을 때 그 사이의 action은 무시
  // takeLatest => 처리중인것을 취소, 새로들어온 것을 처리
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}