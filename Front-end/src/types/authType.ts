import { authConstant } from "../constant/authConstant";

export interface ILoginData {
  data: {
    token: string;
    message: string;
    user: {
      name: string;
      email: string;
    };
  };
}
export interface ILoginDataSuccess {
  success: boolean;
  message: string;
  data: ILoginData;
}
export interface ILoginDataFailure {
  success: boolean;
  message: string;
}
export interface ILoginDataRequest {
  email: string;
  password: string;
}

export interface AuthState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  authData?: ILoginDataSuccess | ILoginDataFailure;
}

export interface LoginRequestAction {
  type: typeof authConstant.userLoginRequest;
  payload: { email: string; password: string };
}

export interface LoginSuccessAction {
  type: typeof authConstant.userLoginSuccess;
  payload: ILoginDataSuccess;
}

export interface LoginFailureAction {
  type: typeof authConstant.userLoginFailure;
  payload: ILoginDataFailure;
}

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
