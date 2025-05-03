import { configureStore } from "@reduxjs/toolkit/react";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import rootReducer from "../slice/index";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export default store;
