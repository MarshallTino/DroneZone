export interface DroneComponent {
  name: string;
  pricePerUnit: number;
  image: string;
  quantity?: number;
  sizeOrmountingSize?: string;
  connector?: string;
  power?: string;
  type?: string;
  batteryVoltage?: string;
  batteryCapacity?: string;
  protocol?: string;
  telemetry?: string;
}

export interface DroneStructure {
  id: string;
  droneImage: string;
  schemaImage: string;
  creator: string;
  creatorName: string;
  categories: {
    difficulty: string;
    transmissionType: string;
    droneClass: string;
  };
  components: {
    motor: DroneComponent;
    frame: DroneComponent;
    esc: DroneComponent;
    camera: DroneComponent;
    vtx: DroneComponent;
    propeller: DroneComponent;
    controller: DroneComponent;
    battery: DroneComponent;
    vtxAntenna: DroneComponent;
    receiver: DroneComponent;
  };
}

export interface DroneByIdResponse {
  drone: DroneStructure;
}

export type Drones = DroneStructure[];

export interface ApiResponse {
  drones: Drones;
}

export interface UserDronesResponse {
  userDrones: Drones;
}

export interface DronesState {
  drones: Drones;
  drone: DroneStructure;
}
