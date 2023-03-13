import { Drones, DroneStructure } from "../store/features/dronesSlice/types";

export const mockedDrones: Drones = [
  {
    droneImage:
      "https://th.bing.com/th/id/OIP.g0wgRI_-Jes0BWsNmnPspAHaHa?pid=ImgDet&rs=1",
    schemaImage:
      "https://cdn.shopify.com/s/files/1/0027/2708/4144/files/M_F405_MINI_MK2.png?1497",
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
  {
    droneImage:
      "https://img.staticbg.com/images/oaupload/banggood/images/0D/9C/88f43472-ab91-4c89-af6e-f044d0626c21.jpg",
    schemaImage:
      "https://cdn.shopify.com/s/files/1/0027/2708/4144/files/M_F405_MINI_MK2.png?1497",
    creator: "Jane Smith",
    categories: {
      difficulty: "Advanced",
      transmissionType: "Analog",
      droneClass: "Freestyle",
    },
    components: {
      motor: {
        name: "T-Motor F40 Pro III",
        pricePerUnit: 24.99,
        quantity: 4,
        image: "https://example.com/motor-image2.jpg",
      },
      frame: {
        name: "Armattan Rooster",
        sizeOrmountingSize: "5 inch",
        pricePerUnit: 89.99,
        image: "https://example.com/frame-image2.jpg",
      },
      esc: {
        name: "Holybro Tekko32 F3 Metal ESC",
        pricePerUnit: 19.99,
        quantity: 4,
        image: "https://example.com/esc-image2.jpg",
      },
      camera: {
        name: "Runcam Eagle 2 Pro",
        pricePerUnit: 39.99,
        sizeOrmountingSize: "Micro",
        image: "https://example.com/camera-image2.jpg",
      },
      vtx: {
        name: "TBS Unify Pro32 HV",
        pricePerUnit: 39.99,
        connector: "MMCX",
        power: "25-1000mW",
        image: "https://example.com/vtx-image2.jpg",
      },
      propeller: {
        name: "Gemfan Flash 5152",
        pricePerUnit: 3.49,
        sizeOrmountingSize: "5x5.2",
        quantity: 8,
        image: "https://example.com/propeller-image2.jpg",
      },
      controller: {
        name: "Radiomaster TX16S",
        pricePerUnit: 149.99,
        type: "16-channel",
        image: "https://example.com/controller-image2.jpg",
      },
      battery: {
        name: "Gens Ace Tattu R-Line V3 6S 1300mAh",
        pricePerUnit: 39.99,
        batteryVoltage: "22.2V",
        batteryCapacity: "1300mAh",
        image: "https://example.com/battery-image2.jpg",
      },
      vtxAntenna: {
        name: "Foxeer Lollipop 3",
        pricePerUnit: 19.99,
        connector: "MMCX",
        image: "https://example.com/vtx-antenna-image2.jpg",
      },
      receiver: {
        name: "TBS Crossfire Nano",
        pricePerUnit: 39.99,
        protocol: "Crossfire",
        telemetry: "Yes",
        image: "https://example.com/receiver-image2.jpg",
      },
    },
  },
  {
    droneImage:
      "https://th.bing.com/th/id/OIP.aq8rUK9YBtkqPXTIvfTGPgHaHa?pid=ImgDet&rs=1",
    schemaImage:
      "https://cdn.shopify.com/s/files/1/0027/2708/4144/files/M_F405_MINI_MK2.png?1497",
    creator: "John Doe",
    categories: {
      difficulty: "Expert",
      transmissionType: "Digital",
      droneClass: "Racing",
    },
    components: {
      motor: {
        name: "EMAX RSII 2206",
        pricePerUnit: 22.99,
        quantity: 4,
        image: "https://example.com/motor-image3.jpg",
      },
      frame: {
        name: "iFlight XL5 V5",
        sizeOrmountingSize: "5 inch",
        pricePerUnit: 109.99,
        image: "https://example.com/frame-image3.jpg",
      },
      esc: {
        name: "Flywoo GOKU 45A BLheli_32",
        pricePerUnit: 21.99,
        quantity: 4,
        image: "https://example.com/esc-image3.jpg",
      },
      camera: {
        name: "Foxeer Predator 5 Nano",
        pricePerUnit: 44.99,
        sizeOrmountingSize: "Micro",
        image: "https://example.com/camera-image3.jpg",
      },
      vtx: {
        name: "TBS Unify Pro32 Nano",
        pricePerUnit: 34.99,
        connector: "UFL",
        power: "25-400mW",
        image: "https://example.com/vtx-image3.jpg",
      },
      propeller: {
        name: "DALPROP Cyclone T5147C Pro",
        pricePerUnit: 3.99,
        sizeOrmountingSize: "5x4.7",
        quantity: 8,
        image: "https://example.com/propeller-image3.jpg",
      },
      controller: {
        name: "FrSky Taranis X9D Plus SE",
        pricePerUnit: 229.99,
        type: "16-channel",
        image: "https://example.com/controller-image3.jpg",
      },
      battery: {
        name: "CNHL MiniStar 6S 1250mAh",
        pricePerUnit: 29.99,
        batteryVoltage: "22.2V",
        batteryCapacity: "1250mAh",
        image: "https://example.com/battery-image3.jpg",
      },
      vtxAntenna: {
        name: "Lumenier AXII 2",
        pricePerUnit: 24.99,
        connector: "UFL",
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
  {
    droneImage:
      "https://th.bing.com/th/id/OIP.L46JYLdCW8gDEzEjMqAcJgHaHa?pid=ImgDet&rs=1",
    schemaImage: "https://example.com/drone-schema3.jpg",
    creator: "John Doe",
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
