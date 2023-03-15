import { useAppSelector } from "../../store/hooks";
import { DroneCard } from "../DroneCard/DroneCard";
import DronesListStyled from "./DronesListStyled";

const DronesList = (): JSX.Element => {
  const drones = useAppSelector((state) => state.drones.drones);

  return (
    <>
      <DronesListStyled className="drones-list">
        {drones.map((drone) => (
          <li key={drone.id}>
            <DroneCard drone={drone} />
          </li>
        ))}
      </DronesListStyled>
    </>
  );
};

export default DronesList;
