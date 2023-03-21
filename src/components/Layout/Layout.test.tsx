import { screen } from "@testing-library/react";
import Layout from "./Layout";
import "@testing-library/jest-dom";
import {
  preloadedStateLoading,
  preloadedStateModal,
} from "../../utils/testUtils/preloadedStates";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";

beforeAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

describe("Given a layout component", () => {
  describe("When it is rendered and the user isn't logged in", () => {
    test("Then it should show a loginnForm", () => {
      renderRouterWithProviders(preloadedStateLoading, <Layout />);

      const ovalLoader = screen.getByLabelText("oval-loading");
      expect(ovalLoader).toBeInTheDocument();
    });
  });

  describe("When the entered credentials are invalid and the property modal on the store returns true", () => {
    test("Then it should show a modal with the text 'Invalid credentials'", async () => {
      await renderRouterWithProviders(preloadedStateModal, <Layout />);

      const modal = await screen.findByText("Invalid credentials");

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When the user creates a drone", () => {
    test("Then it should show a modal with the text 'Drone Created Successfully'", async () => {
      renderRouterWithProviders({});
      await renderRouterWithProviders(
        {
          ui: {
            isError: false,
            modal: "Drone Created Successfully",
            isLoading: false,
          },
        },
        <Layout />
      );

      const modal = await screen.findAllByText("Drone Created Successfully");

      expect(modal[0]).toBeInTheDocument();
    });
  });
});
