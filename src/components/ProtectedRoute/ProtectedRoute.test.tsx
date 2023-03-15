import ProtectedRoute from "./ProtectedRoute";
import { screen } from "@testing-library/react";
import { useAppSelector } from "../../store/hooks";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import "@testing-library/jest-dom/extend-expect";
import * as ReactRouterDom from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered and there is a token", () => {
    test("Then it should show the react element received by props", () => {
      (useAppSelector as jest.Mock).mockReturnValueOnce({
        token: "okeeeeilesgo",
      });
      const element = <div>Hellothere</div>;

      renderRouterWithProviders({}, <ProtectedRoute element={element} />);

      const expectedElement = screen.getByText("Hellothere");

      expect(expectedElement).toBeInTheDocument();
    });
  });

  describe("When it is rendered and there is no token", () => {
    test("Then it should show not render the react element received by props", () => {
      const element = <div>Hellothere</div>;

      renderRouterWithProviders({}, <ProtectedRoute element={element} />);

      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
