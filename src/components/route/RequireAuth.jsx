import { useAuth } from "../../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const { auth } = useAuth();
  return auth?.token ? <Outlet /> : <Navigate to="onboarding/login" />;
};

export default RequireAuth;
