import { mockedDrone, mockedDrones } from "../../mocks/dronesArray";
import { DronesState } from "../../store/features/dronesSlice/types";

export const preloadedStateLoggedIn = {
  user: {
    email: "marcelmartino2053@gmail.com",
    id: "640729e2304c8728da0a679a",
    isLogged: true,
    token: "8459w88468a49848488dwd",
  },
};

export const preloadedStateModal = {
  ui: { modal: "Invalid credentials", isError: true, isLoading: false },
};

export const preloadedStateModalReset = {
  ui: { modal: "", isError: false, isLoading: false },
};

export const preloadedStateLoading = {
  ui: { isLoading: true, isError: false, modal: "" },
};

export const preloadedStateDrones: DronesState = {
  drones: mockedDrones,
  drone: mockedDrone,
};
