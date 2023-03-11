import { ToastContainer } from "react-toastify";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <LoginForm />
      <ToastContainer />
    </>
  );
};

export default LoginPage;
