import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

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
    loginUser: (currentUserState, action: PayloadAction<User>): UserState => ({
      ...currentUserState,
      token: action.payload.token,
      id: action.payload.id,
      email: action.payload.email,
      isLogged: true,
    }),
    logoutUser: (): UserState => ({ ...initialState }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
