import { screen } from "@testing-library/react";
import DronesList from "./DronesList";
import "@testing-library/jest-dom";
import {
  preloadedStateDrones,
  preloadedStateLoggedIn,
} from "../../utils/testUtils/preloadedStates";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import { mockedDrone, mockedDrones } from "../../mocks/dronesArray";

describe("Given a DronesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show", async () => {
      const propertyText = "MarshallTino";

      renderRouterWithProviders(
        {
          ...preloadedStateLoggedIn,
          drones: { drone: mockedDrone, drones: mockedDrones },
        },
        <DronesList />
      );
      const card = screen.getByRole("heading", {
        name: propertyText,
      });

      expect(card).toBeInTheDocument();
    });
  });
});
