import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PersistLogin = () => {
  const { auth } = useAuth();
  return auth?.token ? <Navigate to="../dashboard" /> : <Outlet />;
};

export default PersistLogin;
