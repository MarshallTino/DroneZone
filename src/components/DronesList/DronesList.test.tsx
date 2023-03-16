import { screen } from "@testing-library/react";
import DronesList from "./DronesList";
import "@testing-library/jest-dom";
import { preloadedStateDrones } from "../../utils/testUtils/preloadedStates";
import { renderWithProviders } from "../../utils/testUtils/renderWithProviders";

describe("Given a DronesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show", async () => {
      const propertyText = "MarshallTino";

      renderWithProviders(<DronesList />, { drones: preloadedStateDrones });
      const card = screen.getByRole("heading", {
        name: propertyText,
      });

      expect(card).toBeInTheDocument();
    });
  });
});
