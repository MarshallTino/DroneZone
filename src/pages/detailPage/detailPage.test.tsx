import { screen } from "@testing-library/react";
import { mockedDrone, mockedDrones } from "../../mocks/dronesArray";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import DetailPage from "./detailPage";
import "@testing-library/jest-dom";

describe("Given a detailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title 'Drone Images'", () => {
      renderRouterWithProviders(
        { drones: { drone: mockedDrone, drones: mockedDrones } },
        <DetailPage />
      );

      const heading = screen.getByRole("heading", { name: "Drone Images" });
      expect(heading).toBeInTheDocument();
    });
  });
});
