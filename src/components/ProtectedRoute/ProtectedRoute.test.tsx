import ProtectedRoute from "./ProtectedRoute";
import { screen } from "@testing-library/react";
import { useAppSelector } from "../../store/hooks";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import "@testing-library/jest-dom/extend-expect";

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

      renderWithProviders(<ProtectedRoute element={element} />);

      const expectedElement = screen.getByText("Hellothere");

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
