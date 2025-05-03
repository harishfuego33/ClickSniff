import { all, takeLatest } from "redux-saga/effects";
import { loginRequest } from "../slice/authSlicer";
import { loginSaga } from "./loginSaga";

function* rootSaga() {
  yield all([takeLatest(loginRequest.type, loginSaga.login)]);
}
export default rootSaga;
