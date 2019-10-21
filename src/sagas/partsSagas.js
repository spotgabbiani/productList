import {
  LOAD_PARTS_FAILED,
  LOAD_PARTS_REQUEST,
  LOAD_PARTS_SUCCESS,
} from "../actions/partsActions";
import { loadPartsFromApi} from "../api/partsapi";
import {call, put, takeLatest} from 'redux-saga/effects';

function* loadParts() {
  try {
    const parts = yield call(loadPartsFromApi);
    yield put({ type: LOAD_PARTS_SUCCESS, parts });
  } catch (e) {
    yield put({ type: LOAD_PARTS_FAILED, error: e.message });
  }
}

function* partsSaga() {
  yield takeLatest(LOAD_PARTS_REQUEST, loadParts);
}

export default partsSaga;