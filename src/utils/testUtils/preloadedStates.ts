import { mockedDrones } from "../../mocks/dronesArray";

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

export const preloadedStateDrones = {
  drones: mockedDrones,
};
