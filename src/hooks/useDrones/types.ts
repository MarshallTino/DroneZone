import { DroneStructure } from "../../store/features/dronesSlice/types";

export interface CreateDrone {
  droneImage: File;
  schemaImage: File;
  creator: string;
  difficulty: string;
  transmissionType: string;
  droneClass: string;
  motorName: string;
  motorPricePerUnit: number;
  motorQuantity: number;
  motorImage: File;
  frameName: string;
  frameSizeOrMountingSize: string;
  framePricePerUnit: number;
  frameImage: File;
  escName: string;
  escPricePerUnit: number;
  escQuantity: number;
  escImage: File;
  cameraName: string;
  cameraPricePerUnit: number;
  cameraSizeOrMountingSize: string;
  cameraImage: File;
  vtxName: string;
  vtxPricePerUnit: number;
  vtxConnector: string;
  vtxPower: string;
  vtxImage: File;
  propellerName: string;
  propellerPricePerUnit: number;
  propellerSizeOrMountingSize: string;
  propellerQuantity: number;
  propellerImage: File;
  controllerName: string;
  controllerPricePerUnit: number;
  controllerType: string;
  controllerImage: File;
  batteryName: string;
  batteryPricePerUnit: number;
  batteryVoltage: string;
  batteryCapacity: string;
  batteryImage: File;
  vtxAntennaName: string;
  vtxAntennaPricePerUnit: number;
  vtxAntennaConnector: string;
  vtxAntennaImage: File;
  receiverName: string;
  receiverPricePerUnit: number;
  receiverProtocol: string;
  receiverTelemetry: string;
  receiverImage: File;
}

export interface CreateDroneResponse {
  drone: DroneStructure;
}
