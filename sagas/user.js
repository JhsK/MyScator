import { all } from "redux-saga/effects";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    const reuslt = yield call(logInAPI, action.data);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: reuslt.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST");
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
