import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload } from "./types";

export const initialState: ModalPayload = {
  modal: "",
  isError: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showModal: (
      currentState,
      action: PayloadAction<ModalPayload>
    ): ModalPayload => ({
      ...currentState,
      modal: action.payload.modal,
      isError: action.payload.isError,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const { showModal: showModalActionCreator } = uiSlice.actions;
