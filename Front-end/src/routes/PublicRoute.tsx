import { isAuthenticated } from "./auth";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  return isAuthenticated() ? <Navigate to="/search" /> : children;
};
export default PublicRoute;
