import DetailImageContainer from "../../components/DetailImageContainer/DetailImageContainer";
import DroneComponentCardList from "../../components/DroneCardComponentList/DroneComponentCardList";
import { useAppSelector } from "../../store/hooks";

import useDrones from "../../hooks/useDrones/useDrones";
import DetailPageStyled from "./detailPageStyled";
import DetailDroneInfo from "../../components/DetailDroneInfo/DetailDroneInfo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DetailPage = (): JSX.Element => {
  const { findDroneById } = useDrones();
  const drone = useAppSelector((state) => state.drones.drone);
  const { id } = useParams();

  useEffect(() => {
    findDroneById(id!);
  }, [id, findDroneById]);
  return (
    <DetailPageStyled>
      <DetailImageContainer
        droneImage={drone.droneImage}
        schemaImage={drone.schemaImage}
      />
      <DetailDroneInfo categories={drone.categories} />
      <DroneComponentCardList drone={drone} />
    </DetailPageStyled>
  );
};

export default DetailPage;
