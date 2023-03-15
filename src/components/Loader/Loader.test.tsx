import { screen } from "@testing-library/react";
import Loader from "./Loader";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/testUtils/renderWithProviders";

describe("Given a loader component", () => {
  describe("When it is invoked", () => {
    test("Then it should show a spinning oval", () => {
      renderWithProviders(<Loader />);

      const ovalLoader = screen.getByLabelText("oval-loading");
      expect(ovalLoader).toBeInTheDocument();
    });
  });
});
