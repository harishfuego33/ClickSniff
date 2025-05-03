import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loginService } from "../service/loginService";
import { ILoginDataRequest, ILoginDataSuccess } from "../types/authType";
import { loginFailure, loginSuccess } from "../slice/authSlicer";

function* login(action: PayloadAction<ILoginDataRequest>) {
  try {
    const response = (yield call(
      loginService.login,
      action.payload
    )) as ILoginDataSuccess;
    if (response.success) {
      yield put(loginSuccess(response));
    } else {
      yield put(loginFailure(response));
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(loginFailure({ success: false, message: error.message }));
    } else {
      yield put(
        loginFailure({ success: false, message: "An unknown error occurred" })
      );
    }
  }
}
export const loginSaga = {
  login,
};
