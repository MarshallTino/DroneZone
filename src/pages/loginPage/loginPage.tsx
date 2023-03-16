import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return isLogged ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
