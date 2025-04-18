import { userConstant } from "./constant/userConstant";
interface ICreateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const createUser = (input: ICreateUser) => {
  return { type: userConstant.createUserRequest, payload: input };
};

export const userAction = {
  createUser,
};
