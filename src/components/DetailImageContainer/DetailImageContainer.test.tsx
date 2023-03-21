import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockedDrone } from "../../mocks/dronesArray";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import DetailImageContainer from "./DetailImageContainer";

describe("Given a DetailImageContainer", () => {
  describe("When it is rendered", () => {
    test("Then it should render a droneImage", () => {
      renderRouterWithProviders(
        {
          drones: { drone: mockedDrone, drones: [] },
          user: { email: "", id: "", isLogged: true, token: "" },
        },
        <DetailImageContainer
          droneImage={mockedDrone.droneImage}
          schemaImage={mockedDrone.schemaImage}
        />
      );

      const droneImage = screen.getByRole("img", { name: "drone schema" });
      expect(droneImage).toBeInTheDocument();
    });
  });
});
