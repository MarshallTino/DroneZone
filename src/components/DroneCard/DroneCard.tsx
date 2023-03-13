import { DroneStructure } from "../../store/features/dronesSlice/types";
import DroneCardStyled from "./DroneCardStyled";

export interface DroneCardProps {
  drone: DroneStructure;
}

export const DroneCard = ({
  drone: { droneImage, categories, creator },
}: DroneCardProps): JSX.Element => {
  return (
    <DroneCardStyled className="drone-card">
      <img
        className="drone-card__image"
        width="350"
        height="320"
        src={droneImage}
        alt={"drone"}
      />
      <div className="properties">
        <span className="properties__container">
          <h2 className="properties__title">Level</h2>
          <h3 className="properties__value">{categories.difficulty}</h3>
        </span>
        <span className="properties__container">
          <h2 className="properties__title">Class</h2>
          <h3 className="properties__value">{categories.droneClass}</h3>
        </span>

        <span className="properties__container">
          <h1 className="properties__title">Transmission</h1>
          <h2 className="properties__value">{categories.transmissionType}</h2>
        </span>
      </div>
      <div className="creator">
        <h2 className="creator__title">Created by </h2>
        <h3 className="creator__name"> {creator}</h3>
      </div>
    </DroneCardStyled>
  );
};
