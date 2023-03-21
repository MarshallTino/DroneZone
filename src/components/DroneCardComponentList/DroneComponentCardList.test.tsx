import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockedDrone } from "../../mocks/dronesArray";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import DroneComponentCardList from "./DroneComponentCardList";

describe("Given a droneComponentCardlist", () => {
  describe("When it is rendered", () => {
    test("Then it should render a droneComponentCard", () => {
      renderRouterWithProviders(
        {
          drones: { drone: mockedDrone, drones: [] },
          user: { email: "", id: "", isLogged: true, token: "" },
        },
        <DroneComponentCardList drone={mockedDrone} />
      );

      const droneComponentCard = screen.getByRole("heading", { name: "Motor" });
      expect(droneComponentCard).toBeInTheDocument();
    });
  });
});
