import { useAppSelector } from "../../store/hooks";
import DroneComponentCard from "../droneComponentCard/droneComponentCard";
import DroneComponentCardProperty from "../DroneComponentCardProperty/DroneComponentCardproperty";
import DroneComponentCardListStyled from "./DroneComponentCardListStyled";

const DroneComponentCardList = (): JSX.Element => {
  const drone = useAppSelector((state) => state.drones.drone);
  return (
    <DroneComponentCardListStyled>
      <DroneComponentCard name={"Motor"} component={drone.components.motor}>
        <DroneComponentCardProperty
          propertyTitle="Quantity"
          propertyValue={drone.components.motor.quantity!}
        />
      </DroneComponentCard>

      <DroneComponentCard name={"Frame"} component={drone.components.frame}>
        <DroneComponentCardProperty
          propertyTitle="Frame Size"
          propertyValue={drone.components.frame.sizeOrmountingSize!}
        />
      </DroneComponentCard>

      <DroneComponentCard name={"ESC"} component={drone.components.esc}>
        <DroneComponentCardProperty
          propertyTitle="Quantity"
          propertyValue={drone.components.esc.quantity!}
        />
      </DroneComponentCard>

      <DroneComponentCard name={"Camera"} component={drone.components.camera}>
        <DroneComponentCardProperty
          propertyTitle="Camera Size"
          propertyValue={drone.components.camera.sizeOrmountingSize!}
        />
      </DroneComponentCard>

      <DroneComponentCard name={"VTX"} component={drone.components.vtx}>
        <DroneComponentCardProperty
          propertyTitle="Power"
          propertyValue={drone.components.vtx.power!}
        />
        <DroneComponentCardProperty
          propertyTitle="Connector"
          propertyValue={drone.components.vtx.connector!}
        />
      </DroneComponentCard>

      <DroneComponentCard
        name={"Propellers"}
        component={drone.components.propeller}
      >
        <DroneComponentCardProperty
          propertyTitle="Quantity"
          propertyValue={drone.components.propeller.quantity!}
        />
        <DroneComponentCardProperty
          propertyTitle="Size"
          propertyValue={drone.components.propeller.sizeOrmountingSize!}
        />
      </DroneComponentCard>

      <DroneComponentCard
        name={"Controller"}
        component={drone.components.controller}
      >
        <DroneComponentCardProperty
          propertyTitle="Type"
          propertyValue={drone.components.controller.type!}
        />
      </DroneComponentCard>

      <DroneComponentCard name={"Battery"} component={drone.components.battery}>
        <DroneComponentCardProperty
          propertyTitle="Battery Voltage"
          propertyValue={drone.components.battery.batteryVoltage!}
        />
        <DroneComponentCardProperty
          propertyTitle="Battery Capacity"
          propertyValue={drone.components.battery.batteryCapacity!}
        />
      </DroneComponentCard>

      <DroneComponentCard
        name={"VTX Antenna"}
        component={drone.components.vtxAntenna}
      >
        <DroneComponentCardProperty
          propertyTitle="Connector"
          propertyValue={drone.components.vtxAntenna.connector!}
        />
      </DroneComponentCard>

      <DroneComponentCard
        name={"Receiver"}
        component={drone.components.receiver}
      >
        <DroneComponentCardProperty
          propertyTitle="Protocol"
          propertyValue={drone.components.receiver.protocol!}
        />
        <DroneComponentCardProperty
          propertyTitle="Telemetry"
          propertyValue={drone.components.receiver.telemetry!}
        />
      </DroneComponentCard>
    </DroneComponentCardListStyled>
  );
};

export default DroneComponentCardList;
