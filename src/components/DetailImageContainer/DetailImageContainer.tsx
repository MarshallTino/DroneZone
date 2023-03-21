import DetailImageContainerStyled from "./DetailImageContainerStyled";

interface DetailImageContainerProps {
  droneImage: string;
  schemaImage: string;
}

const DetailImageContainer = ({
  droneImage,
  schemaImage,
}: DetailImageContainerProps): JSX.Element => {
  return (
    <DetailImageContainerStyled>
      <div className="image-container__title-container">
        <h2 className="image-container__title">Drone Images</h2>
      </div>
      <img src={droneImage} alt="drone" className="image-container__image" />
      <img
        src={schemaImage}
        alt="drone schema"
        className="image-container__image"
      />
    </DetailImageContainerStyled>
  );
};

export default DetailImageContainer;
