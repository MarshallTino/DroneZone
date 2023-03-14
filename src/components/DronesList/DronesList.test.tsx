import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import DronesList from "./DronesList";
import "@testing-library/jest-dom";
import { preloadedStateDrones } from "../../utils/testUtils/preloadedStates";

describe("Given a DronesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show", async () => {
      const propertyText = "Jane Smith";

      renderWithProviders(<DronesList />, preloadedStateDrones);
      const card = screen.getByRole("heading", { name: propertyText });

      expect(card).toBeInTheDocument();
    });
  });
});
