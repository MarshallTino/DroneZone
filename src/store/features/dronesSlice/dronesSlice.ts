import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Drones } from "./types";

export const dronesInitialState: Drones = [];

const dronesSlice = createSlice({
  name: "drones",
  initialState: dronesInitialState,
  reducers: {
    loadDrones: (currentDronesState, action: PayloadAction<Drones>): Drones => [
      ...action.payload,
    ],
  },
});

export const dronesReducer = dronesSlice.reducer;
export const { loadDrones: loadDronesActionCreator } = dronesSlice.actions;
