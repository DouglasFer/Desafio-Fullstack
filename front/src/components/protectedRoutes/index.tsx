import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../context/contextUser";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  // if (loading) {
  //   return null;
  // }
  return user ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};
