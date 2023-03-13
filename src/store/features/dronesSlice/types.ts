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
  droneImage: string;
  schemaImage: string;
  creator: string;
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

export type Drones = DroneStructure[];
