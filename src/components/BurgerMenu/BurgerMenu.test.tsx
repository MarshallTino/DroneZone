import { act, screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import BurgerMenu from "./BurgerMenu";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Given a BrugerMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with 3 lines", () => {
      renderRouterWithProviders(<BurgerMenu />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      expect(burgerButton).toBeInTheDocument();
    });
  });

  describe("When the burger menu is clicked", () => {
    test("Then it should show a side menu with the title DroneZone", async () => {
      renderRouterWithProviders(<BurgerMenu />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));

      const brugerMenuTitle = screen.getByRole("link", {
        name: "Explore Schemas",
      });

      expect(brugerMenuTitle).toBeInTheDocument();
    });
  });
});
