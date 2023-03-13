import { screen } from "@testing-library/react";
import { mockedDrones } from "../../mocks/dronesArray";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import DronesList from "./DronesList";
import "@testing-library/jest-dom";

describe("Given a DronesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show", async () => {
      const propertyText = "Jane Smith";

      const preloadedState = {
        drones: mockedDrones,
      };

      renderWithProviders(<DronesList />, preloadedState);
      const card = screen.getByRole("heading", { name: propertyText });

      expect(card).toBeInTheDocument();
    });
  });
});
