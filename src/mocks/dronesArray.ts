import { Drones } from "../store/features/dronesSlice/types";

export const mockedDrones: Drones = [
  {
    droneImage: "https://example.com/drone-image.jpg",
    schemaImage: "https://example.com/drone-schema.jpg",
    creator: "John Doe",
    categories: {
      difficulty: "Intermediate",
      transmissionType: "Digital",
      droneClass: "Racing",
    },
    components: {
      motor: {
        name: "DYS BE2204-2600KV",
        pricePerUnit: 19.99,
        quantity: 4,
        image: "https://example.com/motor-image.jpg",
      },
      frame: {
        name: "ZMR 250",
        sizeOrmountingSize: "250mm",
        pricePerUnit: 29.99,
        image: "https://example.com/frame-image.jpg",
      },
      esc: {
        name: "Favourite FVT LittleBee 20A",
        pricePerUnit: 14.99,
        quantity: 4,
        image: "https://example.com/esc-image.jpg",
      },
      camera: {
        name: "Foxeer Arrow Micro Pro",
        pricePerUnit: 29.99,
        sizeOrmountingSize: "Micro",
        image: "https://example.com/camera-image.jpg",
      },
      vtx: {
        name: "Eachine VTX03S",
        pricePerUnit: 14.99,
        connector: "SMA",
        power: "25-350mW",
        image: "https://example.com/vtx-image.jpg",
      },
      propeller: {
        name: "DALPROP T5045C Cyclone",
        pricePerUnit: 2.49,
        sizeOrmountingSize: "5x4.5",
        quantity: 8,
        image: "https://example.com/propeller-image.jpg",
      },
      controller: {
        name: "Flysky FS-i6X",
        pricePerUnit: 49.99,
        type: "6-channel",
        image: "https://example.com/controller-image.jpg",
      },
      battery: {
        name: "Tattu 4S 1300mAh",
        pricePerUnit: 24.99,
        batteryVoltage: "14.8V",
        batteryCapacity: "1300mAh",
        image: "https://example.com/battery-image.jpg",
      },
      vtxAntenna: {
        name: "Lumenier AXII 2",
        pricePerUnit: 14.99,
        connector: "MMCX",
        image: "https://example.com/vtx-antenna-image.jpg",
      },
      receiver: {
        name: "FrSky XSR",
        pricePerUnit: 19.99,
        protocol: "ACCST",
        telemetry: "Yes",
        image: "https://example.com/receiver-image.jpg",
      },
    },
  },
];
