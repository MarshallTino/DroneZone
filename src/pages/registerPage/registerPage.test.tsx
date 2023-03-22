import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "react-router-dom";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import RegisterPage from "./registerPage";

describe("Given a RegisterPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Register'", () => {
      const expectResult = "Register";

      renderRouterWithProviders({}, <RegisterPage />);

      const result = screen.getByRole("button", { name: expectResult });

      expect(result).toBeInTheDocument();
    });
  });
});
