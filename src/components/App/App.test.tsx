import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import App from "./App";
import "@testing-library/jest-dom";
import { preloadedStateDrones } from "../../utils/testUtils/preloadedStates";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loader", () => {
      const preloadedState = {
        ui: {
          modal: "",
          isError: false,
          isLoading: true,
        },
      };
      renderRouterWithProviders(preloadedState, <App />);
      renderRouterWithProviders(preloadedStateDrones);
      const ovalLoader = screen.getByLabelText("oval-loading");
      expect(ovalLoader).toBeInTheDocument();
    });
  });
});
