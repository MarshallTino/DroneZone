import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Drones, DronesState, DroneStructure } from "./types";

export const dronesInitialState: DronesState = { drones: [] };

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
    ) => {
      const newDrones = currentDronesState.drones.filter(
        (drone) => drone.id !== action.payload.id
      );
      return { drones: newDrones };
    },
    createDrone: (
      currentDronesState,
      action: PayloadAction<DroneStructure>
    ): DronesState => ({
      ...currentDronesState,
      drones: [...currentDronesState.drones, action.payload],
    }),
  },
});

export const dronesReducer = dronesSlice.reducer;
export const {
  loadDrones: loadDronesActionCreator,
  deleteDrones: deleteDronesActionCreator,
  createDrone: createDroneActionCreator,
} = dronesSlice.actions;
