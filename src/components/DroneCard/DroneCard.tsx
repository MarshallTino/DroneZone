import useDrones from "../../hooks/useDrones/useDrones";
import { DroneStructure } from "../../store/features/dronesSlice/types";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import DroneCardStyled from "./DroneCardStyled";

export interface DroneCardProps {
  drone: DroneStructure;
}

export const DroneCard = ({ drone }: DroneCardProps): JSX.Element => {
  const { deleteDrone } = useDrones();
  const userID = useAppSelector((state) => state.user.id);
  const isMyDrone = userID === drone.creator;
  return (
    <DroneCardStyled className="drone-card">
      <img
        className="drone-card__image"
        width="350"
        height="320"
        src={drone.droneImage}
        alt={"drone"}
      />

      {isMyDrone && (
        <Button
          className="drone-card__delete"
          text={"Delete"}
          disabled={false}
          action={() => deleteDrone(drone)}
        />
      )}
      <div className="properties">
        <span className="properties__container">
          <h2 className="properties__title">Level</h2>
          <h3 className="properties__value">{drone.categories.difficulty}</h3>
        </span>
        <span className="properties__container">
          <h2 className="properties__title">Class</h2>
          <h3 className="properties__value">{drone.categories.droneClass}</h3>
        </span>

        <span className="properties__container">
          <h1 className="properties__title">Transmission</h1>
          <h2 className="properties__value">
            {drone.categories.transmissionType}
          </h2>
        </span>
      </div>
      <div className="creator">
        <h2 className="creator__title">Created by </h2>
        <h3 className="creator__name"> {drone.creatorName}</h3>
      </div>
    </DroneCardStyled>
  );
};
