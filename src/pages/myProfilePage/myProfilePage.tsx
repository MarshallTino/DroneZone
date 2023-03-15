import { useEffect } from "react";
import DronesList from "../../components/DronesList/DronesList";
import useDrones from "../../hooks/useDrones/useDrones";
import MyProfilePageStyled from "./myProfilePageStyled";

const MyProfilePage = (): JSX.Element => {
  const { getUserDrones } = useDrones();

  useEffect(() => {
    getUserDrones();
  }, [getUserDrones]);

  return (
    <MyProfilePageStyled>
      <div className="profile-page__title-container">
        <h2 className="profile-page__title">My Drone Schemas</h2>
      </div>
      <DronesList />
    </MyProfilePageStyled>
  );
};

export default MyProfilePage;
