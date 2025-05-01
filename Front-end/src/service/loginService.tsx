import { axiosBase, errorHandler } from "./axios";

interface LoginInput {
  email: string;
  password: string;
}

const login = (input: LoginInput) => {
  return axiosBase
    .post("auth/login", input)
    .then((response) => response.data)
    .catch((error) => errorHandler(error));
};

export const loginService = {
  login,
};
