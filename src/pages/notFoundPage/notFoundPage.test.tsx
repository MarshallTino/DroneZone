import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import NotFoundPage from "./notFoundPage";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Given a notFoundPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Page not found...'", () => {
      renderRouterWithProviders(<NotFoundPage />);

      const text = screen.getByRole("heading", { name: "Page not found..." });
      expect(text).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Back To Home Page'", () => {
      renderRouterWithProviders(<NotFoundPage />);

      const button = screen.getByRole("button", { name: "Back To Home Page" });
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the button", () => {
    test("Then it should call the function navigate", () => {
      renderRouterWithProviders(<NotFoundPage />);

      const button = screen.getByRole("button", { name: "Back To Home Page" });

      userEvent.click(button);

      expect(ReactRouterDom.useNavigate).toHaveBeenCalled();
    });
  });
});
