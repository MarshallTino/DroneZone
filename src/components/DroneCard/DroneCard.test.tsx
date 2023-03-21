import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { mockedDrone, mockedDrones } from "../../mocks/dronesArray";
import { DroneCard } from "./DroneCard";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import { act } from "react-dom/test-utils";
import { preloadedStateLoggedIn } from "../../utils/testUtils/preloadedStates";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

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
      renderRouterWithProviders(
        {
          ...preloadedStateLoggedIn,
          drones: { drone: mockedDrone, drones: mockedDrones },
        },
        <DroneCard drone={mockedDrone} />
      );

      const expectedImage = screen.getByRole("img");
      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show the text 'Transmission'", () => {
      renderRouterWithProviders(
        preloadedStateLoggedIn,
        <DroneCard drone={mockedDrone} />
      );

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

  describe("When the user clicks on the image", () => {
    test("Then the useNavigate function should be called", async () => {
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

      const image = screen.getByRole("img");
      await act(async () => await userEvent.click(image));

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
