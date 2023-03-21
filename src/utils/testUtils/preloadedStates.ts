import { mockedDrone, mockedDrones } from "../../mocks/dronesArray";
import { DronesState } from "../../store/features/dronesSlice/types";

export const preloadedStateLoggedIn = {
  user: {
    email: "",
    id: "",
    isLogged: true,
    token: "",
  },
};

export const preloadedStateModal = {
  ui: { modal: "Invalid credentials", isError: true, isLoading: false },
};

export const preloadedStateLoading = {
  ui: { isLoading: true, isError: false, modal: "" },
};

export const preloadedStateDrones: DronesState = {
  drones: mockedDrones,
  drone: mockedDrone,
};
