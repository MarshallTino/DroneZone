import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import LoginPage from "./loginPage";
import "@testing-library/jest-dom/extend-expect";
import "react-router-dom";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import { preloadedStateLoggedIn } from "../../utils/testUtils/preloadedStates";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Sign In'", () => {
      const expectResult = "Sign In";

      renderRouterWithProviders({}, <LoginPage />);

      const result = screen.getByRole("button", { name: expectResult });

      expect(result).toBeInTheDocument();
    });
  });

  describe("When the user is already logged in", () => {
    test("Then it should call 'Navigate'", () => {
      renderRouterWithProviders(preloadedStateLoggedIn, <LoginPage />);
      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
