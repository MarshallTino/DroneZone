import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockedDrone } from "../../mocks/dronesArray";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import DetailDroneInfo from "./DetailDroneInfo";

describe("Given a DetailDroneInfo component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a span with the text digital", () => {
      renderRouterWithProviders(
        {
          drones: { drone: mockedDrone, drones: [] },
          user: { email: "", id: "", isLogged: true, token: "" },
        },
        <DetailDroneInfo categories={mockedDrone.categories} />
      );

      const transmissionSpan = screen.getByText("Digital");
      expect(transmissionSpan).toBeInTheDocument();
    });
  });
});
