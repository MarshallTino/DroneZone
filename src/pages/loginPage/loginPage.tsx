import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import LoginForm from "../../components/LoginForm/LoginForm";
import { showErrorToast } from "../../modals/modals";
import { useAppSelector } from "../../store/hooks";

const LoginPage = (): JSX.Element => {
  const { modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (modal) {
      showErrorToast(modal);
    }
  }, [modal]);

  return (
    <>
      <LoginForm />
      <ToastContainer />
    </>
  );
};

export default LoginPage;
