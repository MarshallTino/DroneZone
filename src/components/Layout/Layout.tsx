import { useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "../../modals/modals";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { modal } = useAppSelector((state) => state.ui);
  const { isError } = useAppSelector((state) => state.ui);
  useEffect(() => {
    if (modal) {
      isError ? showErrorToast(modal) : showSuccessToast(modal);
    }
  }, [isError, modal]);
  return (
    <>
      <Header />
      <main>
        {isLoading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};

export default Layout;
