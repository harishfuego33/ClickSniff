import { authConstant } from "../actions/constant/authConstant";

interface AuthAction {
  type: string;
  payload?: { token: string; user: { id: string; name: string } };
}

export const login = (state = {}, action: AuthAction) => {
  switch (action.type) {
    case authConstant.userLoginRequest:
      return {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
      };
    case authConstant.userLoginSuccess:
      return {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        authData: action.payload,
      };
    case authConstant.userLoginFailure:
      return {
        isLoading: false,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
