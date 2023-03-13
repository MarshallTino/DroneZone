import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Loader from "../Loader/Loader";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <main>
      {isLoading && <Loader />}
      <Outlet />
    </main>
  );
};

export default Layout;
