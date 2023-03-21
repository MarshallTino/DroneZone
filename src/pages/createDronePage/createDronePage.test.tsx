import { screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import CreateDronePage from "./createDronePage";
import {
  preloadedStateDrones,
  preloadedStateLoggedIn,
} from "../../utils/testUtils/preloadedStates";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";

describe("Given a createDronePAge", () => {
  describe("When it is rendered", () => {
    test("Then it should a form", () => {
      renderRouterWithProviders(
        { drones: preloadedStateDrones, ...preloadedStateLoggedIn },
        <CreateDronePage />
      );
      const form = screen.getByLabelText("Motor Name");

      expect(form).toBeInTheDocument();
    });
  });
});
