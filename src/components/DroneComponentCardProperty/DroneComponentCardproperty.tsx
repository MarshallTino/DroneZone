import DroneComponentCardPropertyStyled from "./DroneComponentCardPropertyStyled";

interface DroneComponentCardPropertyProps {
  propertyTitle: string;
  propertyValue: string | number;
}
const DroneComponentCardProperty = ({
  propertyTitle,
  propertyValue,
}: DroneComponentCardPropertyProps): JSX.Element => {
  return (
    <DroneComponentCardPropertyStyled>
      <span className="info__name">{propertyTitle}</span>
      <span className="info__value">{propertyValue}</span>
    </DroneComponentCardPropertyStyled>
  );
};

export default DroneComponentCardProperty;
