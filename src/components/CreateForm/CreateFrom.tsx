import { CreateDrone } from "../../hooks/useDrones/types";
import { useState } from "react";
import useDrones from "../../hooks/useDrones/useDrones";
import FormGroupInputs, {
  FormGroupInput,
} from "../CreateFormInput/CreateFromInput";
import { useAppSelector } from "../../store/hooks";
import CreateFormStyled from "./CreateFormStyled";
import { useNavigate } from "react-router-dom";

const CreateForm = (): JSX.Element => {
  const creatorName = useAppSelector((state) => state.user.email);
  const { createDrone } = useDrones();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CreateDrone>({
    droneImage: null,
    schemaImage: null,
    creatorName: creatorName,
    difficulty: "",
    transmissionType: "",
    droneClass: "",
    motorName: "",
    motorPricePerUnit: 0,
    motorQuantity: 0,
    motorImage: undefined,
    frameName: "",
    frameSizeOrMountingSize: "",
    framePricePerUnit: 0,
    frameImage: null,
    escName: "",
    escPricePerUnit: 0,
    escQuantity: 0,
    escImage: null,
    cameraName: "",
    cameraPricePerUnit: 0,
    cameraSizeOrMountingSize: "",
    cameraImage: null,
    vtxName: "",
    vtxPricePerUnit: 0,
    vtxConnector: "",
    vtxPower: "",
    vtxImage: null,
    propellerName: "",
    propellerPricePerUnit: 0,
    propellerSizeOrMountingSize: "",
    propellerQuantity: 0,
    propellerImage: null,
    controllerName: "",
    controllerPricePerUnit: 0,
    controllerType: "",
    controllerImage: null,
    batteryName: "",
    batteryPricePerUnit: 0,
    batteryVoltage: "",
    batteryCapacity: "",
    batteryImage: null,
    vtxAntennaName: "",
    vtxAntennaPricePerUnit: 0,
    vtxAntennaConnector: "",
    vtxAntennaImage: null,
    receiverName: "",
    receiverPricePerUnit: 0,
    receiverProtocol: "",
    receiverTelemetry: "",
    receiverImage: null,
  });
  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const file = event.target.files && event.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      [name]: file,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const drone = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      drone.append(key, value);
    });
    await createDrone(drone);
    navigate("/");
  };

  return (
    <CreateFormStyled onSubmit={handleSubmit}>
      <FormGroupInputs name={"Main"}>
        <FormGroupInput
          label="Drone Image"
          name="droneImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="Schema Image"
          name="schemaImage"
          type="file"
          onChange={handleFileChange}
        />
        <FormGroupInput
          label="Drone Class"
          name="droneClass"
          type="text"
          onChange={handleInputChange}
        />
        <FormGroupInput
          label="Difficulty"
          name="difficulty"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Transmission Type"
          name="transmissionType"
          type="text"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"Motors"}>
        <FormGroupInput
          label="Motor Image"
          name="motorImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="Motor Name"
          name="motorName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Quantity"
          name="motorQuantity"
          type="number"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price per Motor"
          name="motorPricePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"Frame"}>
        <FormGroupInput
          label="Frame Image"
          name="frameImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="Frame Name"
          name="frameName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Frame size"
          name="frameSizeOrMountingSize"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price"
          name="framePricePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"ESC's"}>
        <FormGroupInput
          label="ESC Image"
          name="escImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="ESC Name"
          name="escName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Quantity"
          name="escQuantity"
          type="number"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price per unit"
          name="escPricePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"Camera"}>
        <FormGroupInput
          label="Camera Image"
          name="cameraImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="Camera Name"
          name="cameraName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Camera size"
          name="cameraSizeOrMountingSize"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price"
          name="cameraPircePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"VTX"}>
        <FormGroupInput
          label="VTX Image"
          name="vtxImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="VTX Name"
          name="vtxName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="VTX Power"
          name="vtxPower"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="VTX Connector Type"
          name="vtxConnector"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price"
          name="vtxPricePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"Propellers"}>
        <FormGroupInput
          label="Propeller Image"
          name="propellerImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="Propeller Name"
          name="propellerName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Quantity"
          name="propellerQuantity"
          type="number"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Propeller Size"
          name="propellerSizeOrMountingSize"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price"
          name="propellerPricePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"Controller"}>
        <FormGroupInput
          label="Controller Image"
          name="controllerImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="Controller Name"
          name="controllerName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Controller Type"
          name="controllerType"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price"
          name="controllerPricePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"Battery"}>
        <FormGroupInput
          label="Battery Image"
          name="batteryImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="Battery Name"
          name="batteryName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Battery Voltage"
          name="batteryVoltage"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Battery Capacity"
          name="batteryCapacity"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price"
          name="batteryPricePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"Receiver"}>
        <FormGroupInput
          label="Receiver Image"
          name="receiverImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="Receiver Name"
          name="receiverName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Receiver Protocol"
          name="receiverProtocol"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Telemetry"
          name="receiverTelemetry"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price"
          name="receiverPricePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>

      <FormGroupInputs name={"VTX Antenna"}>
        <FormGroupInput
          label="VTX Antenna Image"
          name="vtxAntennaImage"
          type="file"
          onChange={handleFileChange}
        />

        <FormGroupInput
          label="VTX Antenna Name"
          name="vtxAntennaName"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="VTX Antenna Connector"
          name="vtxAntennaConnector"
          type="text"
          onChange={handleInputChange}
        />

        <FormGroupInput
          label="Price"
          name="vtxAntennaPricePerUnit"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroupInputs>
      <button className="form__submit-button" type="submit">
        Create Drone
      </button>
    </CreateFormStyled>
  );
};
export default CreateForm;
