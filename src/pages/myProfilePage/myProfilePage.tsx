import { useEffect } from "react";
import DronesList from "../../components/DronesList/DronesList";
import useDrones from "../../hooks/useDrones/useDrones";

const MyProfilePage = (): JSX.Element => {
  const { getUserDrones } = useDrones();

  useEffect(() => {
    getUserDrones();
  }, [getUserDrones]);

  return <DronesList />;
};

export default MyProfilePage;
