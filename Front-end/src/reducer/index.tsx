import { combineReducers } from "redux";
import { loginReducer } from "./authReducer";

const rootReducer = combineReducers({
  loginReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
