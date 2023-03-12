import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "../../components/LoginForm/LoginForm";
import { showErrorToast } from "../../modals/modals";
import { useAppSelector } from "../../store/hooks";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (modal) {
      showErrorToast(modal);
    }
  }, [modal]);

  return isLogged ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <>
      <LoginForm />
      <ToastContainer />
    </>
  );
};

export default LoginPage;
