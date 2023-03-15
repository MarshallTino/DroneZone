import { screen } from "@testing-library/react";
import { mockedDrone } from "../../mocks/dronesArray";
import { DroneCard } from "./DroneCard";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/testUtils/renderWithProviders";

describe("Given a DroneCard component", () => {
  describe("When it receives a drone and is rendered", () => {
    test("Then it should show an image", () => {
      renderWithProviders(<DroneCard drone={mockedDrone} />);

      const expectedImage = screen.getByRole("img");
      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show the text 'Transmission'", () => {
      renderWithProviders(<DroneCard drone={mockedDrone} />);

      const transmission = screen.getByRole("heading", {
        name: "Transmission",
      });
      expect(transmission).toBeInTheDocument();
    });
  });
});
