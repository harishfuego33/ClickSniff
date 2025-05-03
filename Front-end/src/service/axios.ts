import Axios from "axios";
import { AxiosError } from "axios";
export const axiosBase = Axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
});

export const errorHandler = (error: AxiosError) => {
  if (error.response) {
    return error.response.data;
  } else if (error.message) {
    return { errorMessage: error.message };
  } else {
    return { errorMessage: "Something went wrong" };
  }
};
