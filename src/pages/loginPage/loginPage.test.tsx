import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginPage from "./loginPage";
import "@testing-library/jest-dom/extend-expect";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Sign In'", () => {
      const expectResult = "Sign In";

      renderWithProviders(<LoginPage />);

      const result = screen.getByRole("button", { name: expectResult });

      expect(result).toBeInTheDocument();
    });
  });
});
