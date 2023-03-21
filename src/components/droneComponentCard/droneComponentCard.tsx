import { ReactNode } from "react";
import { DroneComponent } from "../../store/features/dronesSlice/types";
import DroneComponentCardProperty from "../DroneComponentCardProperty/DroneComponentCardproperty";
import DroneComponentCardStyled from "./droneComponentCardStyled";
type DroneComponentCardProps = {
  name: string;
  component: DroneComponent;
  children?: ReactNode[] | ReactNode;
};
const DroneComponentCard = ({
  component,
  name,
  children,
}: DroneComponentCardProps): JSX.Element => {
  return (
    <DroneComponentCardStyled className="component-card">
      <img
        src={component.image}
        alt="drone component"
        height="160"
        width="160"
        className="component-card__image"
      />
      <div className="component-card__info">
        <h3 className="info__title">{name}</h3>
        <DroneComponentCardProperty
          propertyTitle={`${name} Name`}
          propertyValue={component.name}
        />
        <DroneComponentCardProperty
          propertyTitle={"Price Per Unit"}
          propertyValue={`${component.pricePerUnit} €`}
        />
        {children}
      </div>
    </DroneComponentCardStyled>
  );
};

export default DroneComponentCard;
