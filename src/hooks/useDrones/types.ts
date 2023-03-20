import { DroneStructure } from "../../store/features/dronesSlice/types";

export interface CreateDrone {
  droneImage: unknown;
  schemaImage: unknown;
  creatorName: string;
  difficulty: string;
  transmissionType: string;
  droneClass: string;
  motorName: string;
  motorPricePerUnit: number;
  motorQuantity: number;
  motorImage: unknown;
  frameName: string;
  frameSizeOrMountingSize: string;
  framePricePerUnit: number;
  frameImage: unknown;
  escName: string;
  escPricePerUnit: number;
  escQuantity: number;
  escImage: unknown;
  cameraName: string;
  cameraPricePerUnit: number;
  cameraSizeOrMountingSize: string;
  cameraImage: unknown;
  vtxName: string;
  vtxPricePerUnit: number;
  vtxConnector: string;
  vtxPower: string;
  vtxImage: unknown;
  propellerName: string;
  propellerPricePerUnit: number;
  propellerSizeOrMountingSize: string;
  propellerQuantity: number;
  propellerImage: unknown;
  controllerName: string;
  controllerPricePerUnit: number;
  controllerType: string;
  controllerImage: unknown;
  batteryName: string;
  batteryPricePerUnit: number;
  batteryVoltage: string;
  batteryCapacity: string;
  batteryImage: unknown;
  vtxAntennaName: string;
  vtxAntennaPricePerUnit: number;
  vtxAntennaConnector: string;
  vtxAntennaImage: unknown;
  receiverName: string;
  receiverPricePerUnit: number;
  receiverProtocol: string;
  receiverTelemetry: string;
  receiverImage: unknown;
}

export interface CreateDroneResponse {
  drone: DroneStructure;
}
