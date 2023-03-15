import { act, screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import BurgerMenu from "./BurgerMenu";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import {
  preloadedStateDrones,
  preloadedStateLoggedIn,
} from "../../utils/testUtils/preloadedStates";
import React from "react";

afterEach(() => jest.clearAllMocks);

describe("Given a BrugerMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with 3 lines", () => {
      renderRouterWithProviders({}, <BurgerMenu />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      expect(burgerButton).toBeInTheDocument();
    });
  });

  describe("When the burger menu is clicked", () => {
    test("Then it should show a side menu with the link Explore Schemas", async () => {
      renderRouterWithProviders(preloadedStateLoggedIn, <BurgerMenu />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));
      await act(async () => await userEvent.click(burgerButton));

      const brugerMenuTitle = screen.getByRole("link", {
        name: "Explore Schemas",
      });

      expect(brugerMenuTitle).toBeInTheDocument();
    });

    test("Then the setIsOpen should be called with true", async () => {
      const setIsOpen = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => [false, setIsOpen]);

      renderRouterWithProviders(
        { drones: preloadedStateDrones },
        <BurgerMenu />
      );

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));

      expect(setIsOpen).toHaveBeenCalledWith(true);
    });
  });

  describe("When the burger menus is opened and the user clicks on the close button", () => {
    test("Then the setIsOpen should be called with false", async () => {
      const setIsOpen = jest.fn();
      jest.spyOn(React, "useState").mockImplementation(() => [true, setIsOpen]);

      renderRouterWithProviders({}, <BurgerMenu />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));
      const closButton = screen.getByRole("button", { name: "Close Menu" });
      await act(async () => await userEvent.click(closButton));

      expect(setIsOpen).toHaveBeenCalledWith(false);
    });
  });

  describe("When the burger menus is opened and the user clicks on the link Explore Schemas", () => {
    test("Then the setIsOpen should be called with false", async () => {
      const setIsOpen = jest.fn();
      jest.spyOn(React, "useState").mockImplementation(() => [true, setIsOpen]);

      renderRouterWithProviders({}, <BurgerMenu />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));
      const linkExploreSchemas = screen.getByRole("link", {
        name: "Explore Schemas",
      });
      await act(async () => await userEvent.click(linkExploreSchemas));

      expect(setIsOpen).toHaveBeenCalledWith(false);
    });
  });
});
