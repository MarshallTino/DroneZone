import { screen } from "@testing-library/react";
import { mockedDrone } from "../../mocks/dronesArray";
import { DroneCard } from "./DroneCard";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../utils/testUtils/renderWithProviders";
import { act } from "react-dom/test-utils";

beforeAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

afterEach(() => {
  jest.clearAllMocks();
});
const mockDeleteDrone = jest.fn();

jest.mock("../../hooks/useDrones/useDrones", () => () => ({
  deleteDrone: mockDeleteDrone,
}));

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

  describe("When it receives a drone created by that user and the Delete button is clicked", () => {
    test("Then the deleteDrone function should be called", async () => {
      renderRouterWithProviders(
        {
          user: {
            email: "",
            id: "640729e2304c8728da0a679a",
            isLogged: true,
            token: "",
          },
        },
        <DroneCard drone={mockedDrone} />
      );

      const deleteButton = screen.getByRole("button", { name: "Delete" });
      await act(async () => await userEvent.click(deleteButton));

      expect(mockDeleteDrone).toHaveBeenCalled();
    });
  });
});
