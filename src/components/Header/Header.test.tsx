import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import { preloadedStateLoggedIn } from "../../utils/testUtils/preloadedStates";

describe("Given a Header component", () => {
  describe("When it is rendeder", () => {
    test("Then it should show the heading 'DroneZone'", () => {
      renderRouterWithProviders(<Header />, preloadedStateLoggedIn);

      const title = screen.getByRole("heading", { name: "DroneZone" });
      expect(title).toBeInTheDocument();
    });

    test("Then it should show a button with 3 lines", () => {
      renderRouterWithProviders(<Header />, preloadedStateLoggedIn);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      expect(burgerButton).toBeInTheDocument();
    });
  });
});
