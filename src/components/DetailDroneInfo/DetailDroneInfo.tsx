import DetailDroneInfoStyled from "./DetailDroneInfoStyled";

interface DetailDroneInfoProps {
  categories: {
    difficulty: string;
    transmissionType: string;
    droneClass: string;
  };
}

const DetailDroneInfo = ({ categories }: DetailDroneInfoProps): JSX.Element => {
  return (
    <DetailDroneInfoStyled>
      <div className="drone-info__title-container">
        <h2 className="drone-info__title">Drone Info</h2>
      </div>
      <div className="drone-info__category-container">
        <span className="drone-info__category droneClass">
          {categories.droneClass}
        </span>
        <span className="drone-info__category difficulty">
          {categories.difficulty}
        </span>
        <span className="drone-info__category transmission">
          {categories.transmissionType}
        </span>
      </div>
    </DetailDroneInfoStyled>
  );
};

export default DetailDroneInfo;
