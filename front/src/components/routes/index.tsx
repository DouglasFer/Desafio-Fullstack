import { Route, Routes } from "react-router-dom";
// import { Dashboard } from "../pages/dashboard";
import { LoginPage } from "../login";
import { RegisterPage } from "../register";
import { ProtectedRoutes } from "../protectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoutes />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
