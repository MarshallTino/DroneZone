import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Drones, DronesState } from "./types";

export const dronesInitialState: DronesState = { drones: [] };

const dronesSlice = createSlice({
  name: "drones",
  initialState: dronesInitialState,
  reducers: {
    loadDrones: (
      currentDronesState,
      action: PayloadAction<Drones>
    ): DronesState => ({ ...currentDronesState, drones: [...action.payload] }),
  },
});

export const dronesReducer = dronesSlice.reducer;
export const { loadDrones: loadDronesActionCreator } = dronesSlice.actions;
