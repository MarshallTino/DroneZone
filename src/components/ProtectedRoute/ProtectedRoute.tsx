import { Navigate } from "react-router-dom";
import endpoints from "../../routes/endpoints";
import { useAppSelector } from "../../store/hooks";

interface ProtectedRouterProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouterProps): JSX.Element => {
  const { token } = useAppSelector((state) => state.user);
  return token ? element : <Navigate to={endpoints.login} replace={true} />;
};

export default ProtectedRoute;
