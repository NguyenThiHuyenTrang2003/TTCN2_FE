import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { getListTables } from '../../../api/table';  

function* handleFetchTables() {
  yield takeLatest('FETCH_TABLES', function* () {
    try {
      const response = yield call(getListTables);  
      yield put({ type: 'FETCH_TABLES_SUCCESS', payload: response });
    } catch (error) {
      yield put({ type: 'FETCH_TABLES_FAIL', payload: error.message });
    }
  });
}

export default function* tableSaga() {
  yield all([fork(handleFetchTables)]);
}
