import { authConstant } from "../actions/constant/authConstant";

interface AuthAction {
  type: string;
  payload?: { token: string; user: { id: string; name: string } };
}
// interface ILoginData {
//   success: boolean;
//   data: {
//     token: string;
//     user: {
//       id: number;
//       name: string;
//       email: string;
//     };
//   };
// }

const initialState = {
  isLoading: false,
  isSuccess: false,
  isFailure: false,
  authData: {},
};

export const loginReducer = (state = initialState, action: AuthAction) => {
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
