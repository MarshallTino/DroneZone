import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import LoginPage from "./loginPage";
import "@testing-library/jest-dom/extend-expect";
import "react-router-dom";
import renderWithProviders, {
  renderRouterWithProviders,
} from "../../utils/testUtils/renderWithProviders";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Sign In'", () => {
      const expectResult = "Sign In";

      renderWithProviders(<LoginPage />);

      const result = screen.getByRole("button", { name: expectResult });

      expect(result).toBeInTheDocument();
    });
  });

  describe("When the entered credentials are invalid and the property modal on the store returns true", () => {
    test("Then it should show a modal with the text 'Invalid credentials'", async () => {
      await renderRouterWithProviders(<LoginPage />, {
        ui: { modal: "Invalid credentials", isError: true, isLoading: false },
      });

      const modal = await screen.findByText("Invalid credentials");

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When the user is already logged in", () => {
    test("Then it should call 'Navigate'", () => {
      const preloadedState = {
        user: {
          email: "",
          id: "",
          isLogged: true,
          token: "",
        },
      };
      renderRouterWithProviders(<LoginPage />, preloadedState);
      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
