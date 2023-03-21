import { Drones, DroneStructure } from "../store/features/dronesSlice/types";

export const mockedDrones: Drones = [
  {
    id: "640f22ef6dc189aa4e9462f4",

    droneImage:
      "https://th.bing.com/th/id/OIP.L46JYLdCW8gDEzEjMqAcJgHaHa?pid=ImgDet&rs=1",
    schemaImage:
      "https://th.bing.com/th/id/OIP.L46JYLdCW8gDEzEjMqAcJgHaHa?pid=ImgDet&rs=1",
    creator: "640729e2304c8728da0a679a",
    creatorName: "MarshallTino",

    categories: {
      difficulty: "Intermediate",
      transmissionType: "Digital",
      droneClass: "Cinematic",
    },
    components: {
      motor: {
        name: "EMAX RS2306",
        pricePerUnit: 27.99,
        quantity: 4,
        image: "https://example.com/motor-image3.jpg",
      },
      frame: {
        name: "ImpulseRC Apex",
        sizeOrmountingSize: "5 inch",
        pricePerUnit: 79.99,
        image: "https://example.com/frame-image3.jpg",
      },
      esc: {
        name: "DYS Aria 35A",
        pricePerUnit: 16.99,
        quantity: 4,
        image: "https://example.com/esc-image3.jpg",
      },
      camera: {
        name: "RunCam Split 4",
        pricePerUnit: 69.99,
        sizeOrmountingSize: "Micro",
        image: "https://example.com/camera-image3.jpg",
      },
      vtx: {
        name: "TBS Fusion",
        pricePerUnit: 69.99,
        connector: "MMCX",
        power: "25-1000mW",
        image: "https://example.com/vtx-image3.jpg",
      },
      propeller: {
        name: "HQProp 5x4.3x3",
        pricePerUnit: 2.99,
        sizeOrmountingSize: "5x4.3x3",
        quantity: 8,
        image: "https://example.com/propeller-image3.jpg",
      },
      controller: {
        name: "FrSky Taranis X9 Lite",
        pricePerUnit: 129.99,
        type: "16-channel",
        image: "https://example.com/controller-image3.jpg",
      },
      battery: {
        name: "Tattu FunFly 4S 1550mAh",
        pricePerUnit: 27.99,
        batteryVoltage: "14.8V",
        batteryCapacity: "1550mAh",
        image: "https://example.com/battery-image3.jpg",
      },
      vtxAntenna: {
        name: "TrueRC Singularity",
        pricePerUnit: 24.99,
        connector: "MMCX",
        image: "https://example.com/vtx-antenna-image3.jpg",
      },
      receiver: {
        name: "FrSky R-XSR",
        pricePerUnit: 29.99,
        protocol: "FrSky X",
        telemetry: "Yes",
        image: "https://example.com/receiver-image3.jpg",
      },
    },
  },
];

export const mockedDrone: DroneStructure = mockedDrones[0];
