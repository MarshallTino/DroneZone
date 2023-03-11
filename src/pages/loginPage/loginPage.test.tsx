import { screen } from "@testing-library/react";
import renderWithProviders, {
  renderRouterWithProviders,
} from "../../utils/testUtils/renderWithProviders";
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

  describe("When the entered credentials are invalid and the property modal on the store returns true", () => {
    test("Then it should show a modal with the text 'Invalid credentials'", async () => {
      await renderRouterWithProviders(
        {
          ui: { modal: "Invalid credentials", isError: true, isLoading: false },
        },
        <LoginPage />
      );

      const modal = await screen.findByText("Invalid credentials");

      expect(modal).toBeInTheDocument();
    });
  });
});
