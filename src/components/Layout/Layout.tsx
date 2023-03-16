import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showErrorToast } from "../../modals/modals";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (modal) {
      showErrorToast(modal);
    }
  }, [modal]);
  return (
    <>
      <Header />
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
};

export default Layout;
