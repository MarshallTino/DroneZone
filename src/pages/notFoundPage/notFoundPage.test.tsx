import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NotFoundPage from "./notFoundPage";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";

describe("Given a notFoundPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Page not found...'", () => {
      renderRouterWithProviders(<NotFoundPage />);

      const text = screen.getByRole("heading", { name: "Page not found..." });
      expect(text).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Back To Home Page'", () => {
      renderRouterWithProviders(<NotFoundPage />);

      const button = screen.getByRole("link", { name: "Back To HomePage" });
      expect(button).toBeInTheDocument();
    });
  });
});
