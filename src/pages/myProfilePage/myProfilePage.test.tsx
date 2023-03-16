import { screen } from "@testing-library/react";
import {
  preloadedStateDrones,
  preloadedStateLoggedIn,
} from "../../utils/testUtils/preloadedStates";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import MyProfilePage from "./myProfilePage";
import "@testing-library/jest-dom";

describe("Given a myProfilePage", () => {
  describe("When it is rendered and the logged user has 2 created drones", () => {
    test("Then it should show 2 drone cards", () => {
      const propertyText = "MarshallTino";

      renderRouterWithProviders(
        { drones: preloadedStateDrones, ...preloadedStateLoggedIn },
        <MyProfilePage />
      );
      const card = screen.getByRole("heading", { name: propertyText });

      expect(card).toBeInTheDocument();
    });
  });
});
