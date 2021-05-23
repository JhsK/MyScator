import { all, call, fork, take } from "redux-saga/effects";

function logInAPI() {
  return axios.post("/api/login");
}

function* logIn() {
  yield call(logInAPI);
}

function* watchLogin() {
  yield take("LOG_IN", logIn);
}

function* watchLogOut() {
  yield take("LOG_IN");
}

function* watchAddPost() {
  yield take("LOG_IN");
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}
