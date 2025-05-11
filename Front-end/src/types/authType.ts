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
