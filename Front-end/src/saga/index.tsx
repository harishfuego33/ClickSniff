import { all, takeLatest } from "redux-saga/effects";
import { authConstant } from "../actions/constant/authConstant";
import { loginSaga } from "./loginSaga";

function* rootSaga() {
  yield all([takeLatest(authConstant.userLoginRequest, loginSaga.login)]);
}
export default rootSaga;
