import { commonConstant } from "../actions/constant/commonConstant";

export const isAuthenticated = () => {
  return !!sessionStorage.getItem(commonConstant.authData); // or check auth state
};
