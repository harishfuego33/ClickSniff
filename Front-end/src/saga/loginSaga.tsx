import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolKit";
import { loginService } from "../service/loginService";
import { authConstant } from "../actions/constant/authConstant";
interface LoginPayload {
  email: string;
  password: string;
}
interface LoginResponse {
  success: boolean;
  data: {
    token: string;
    user: {
      id: number;
      name: string;
    };
  };
}

function* login(
  action: PayloadAction<LoginPayload>
): Generator<unknown, void, unknown> {
  try {
    const response = (yield call(
      { context: loginService, fn: loginService.login },
      { email: action.payload.email, password: action.payload.password }
    )) as LoginResponse;
    if (response.success) {
      yield put({
        type: authConstant.userLoginSuccess,
        payload: response.data,
      });
    } else {
      yield put({
        type: authConstant.userLoginFailure,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: authConstant.userLoginFailure,
      payload: error,
    });
  }
}
export const loginSaga = {
  login,
};
