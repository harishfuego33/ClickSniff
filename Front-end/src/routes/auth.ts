import { commonConstant } from "../constant/commonConstant";

export const isAuthenticated = () => {
  return !!sessionStorage.getItem(commonConstant.authData);
};
