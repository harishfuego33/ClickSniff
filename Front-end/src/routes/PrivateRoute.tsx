import { isAuthenticated } from "./auth";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
