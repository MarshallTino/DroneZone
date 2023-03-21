import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Drones, DronesState, DroneStructure } from "./types";

export const dronesInitialState: DronesState = {
  drones: [],
  drone: {
    id: "",

    droneImage: "",
    schemaImage: "",
    creator: "",
    creatorName: "",

    categories: {
      difficulty: "",
      transmissionType: "",
      droneClass: "",
    },
    components: {
      motor: {
        name: "",
        pricePerUnit: 0,
        quantity: 0,
        image: "",
      },
      frame: {
        name: "",
        sizeOrmountingSize: "",
        pricePerUnit: 0,
        image: "",
      },
      esc: {
        name: "",
        pricePerUnit: 0,
        quantity: 0,
        image: "",
      },
      camera: {
        name: "",
        pricePerUnit: 0,
        sizeOrmountingSize: "",
        image: "",
      },
      vtx: {
        name: "",
        pricePerUnit: 0,
        connector: "",
        power: "",
        image: "",
      },
      propeller: {
        name: "",
        pricePerUnit: 0,
        sizeOrmountingSize: "",
        quantity: 0,
        image: "",
      },
      controller: {
        name: "",
        pricePerUnit: 0,
        type: "",
        image: "",
      },
      battery: {
        name: "",
        pricePerUnit: 0,
        batteryVoltage: "",
        batteryCapacity: "",
        image: "",
      },
      vtxAntenna: {
        name: "",
        pricePerUnit: 0,
        connector: "",
        image: "",
      },
      receiver: {
        name: "",
        pricePerUnit: 0,
        protocol: "",
        telemetry: "",
        image: "",
      },
    },
  },
};

const dronesSlice = createSlice({
  name: "drones",
  initialState: dronesInitialState,
  reducers: {
    loadDrones: (
      currentDronesState,
      action: PayloadAction<Drones>
    ): DronesState => ({ ...currentDronesState, drones: [...action.payload] }),
    deleteDrones: (
      currentDronesState,
      action: PayloadAction<DroneStructure>
    ) => ({
      ...currentDronesState,
      drones: currentDronesState.drones.filter(
        (drone) => drone.id !== action.payload.id
      ),
    }),
    createDrone: (
      currentDronesState,
      action: PayloadAction<DroneStructure>
    ): DronesState => ({
      ...currentDronesState,
      drones: [...currentDronesState.drones, action.payload],
    }),
    loadDrone: (currentDronesState, action: PayloadAction<DroneStructure>) => ({
      ...currentDronesState,
      drone: action.payload,
    }),
  },
});

export const dronesReducer = dronesSlice.reducer;
export const {
  loadDrones: loadDronesActionCreator,
  deleteDrones: deleteDronesActionCreator,
  createDrone: createDroneActionCreator,
  loadDrone: loadDroneActionCreator,
} = dronesSlice.actions;
