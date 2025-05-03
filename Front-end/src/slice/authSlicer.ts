import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import {
  AuthState,
  ILoginDataSuccess,
  ILoginDataFailure,
  ILoginDataRequest,
} from "../types/authType";

const initialState: AuthState = {
  isLoading: false,
  isSuccess: false,
  isFailure: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, _action: PayloadAction<ILoginDataRequest>) {
      state.isLoading = true;
      state.isFailure = false;
      state.isSuccess = false;
    },
    loginSuccess(state, action: PayloadAction<ILoginDataSuccess>) {
      state.isLoading = false;
      state.isSuccess = true;
      state.authData = action.payload;
    },
    loginFailure(state, action: PayloadAction<ILoginDataFailure>) {
      state.isLoading = false;
      state.isFailure = true;
      state.authData = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
