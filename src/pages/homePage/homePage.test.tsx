import { screen } from "@testing-library/react";
import { preloadedStateDrones } from "../../utils/testUtils/preloadedStates";
import HomePage from "./homePage";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../utils/testUtils/renderWithProviders";

describe("Given a homePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a drone Card", () => {
      renderWithProviders(<HomePage />, { drones: preloadedStateDrones });

      const droneCard = screen.getByRole("heading", { name: "MarshallTino" });
      expect(droneCard).toBeInTheDocument();
    });
  });
});
