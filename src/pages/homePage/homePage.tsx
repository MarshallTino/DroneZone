import { useEffect } from "react";
import DronesList from "../../components/DronesList/DronesList";
import useDrones from "../../hooks/useDrones/useDrones";

const HomePage = (): JSX.Element => {
  const { getDrones } = useDrones();
  useEffect(() => {
    getDrones();
  }, [getDrones]);

  return <DronesList />;
};

export default HomePage;
