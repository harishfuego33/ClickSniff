import { authConstant } from "./constant/authConstant";

interface LoginInput {
  username: string;
  password: string;
}

const login = (input: LoginInput) => {
  return { type: authConstant.userLoginRequest, payload: input };
};

export const authAction = {
  login,
};
