import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types";

export const initialState: UserState = {
  id: "",
  isLogged: false,
  email: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (
      currentUserState,
      action: PayloadAction<UserState>
    ): UserState => ({
      ...currentUserState,
      token: action.payload.token,
      id: action.payload.id,
      email: action.payload.email,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
