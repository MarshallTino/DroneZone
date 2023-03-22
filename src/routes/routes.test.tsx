import "@testing-library/jest-dom/extend-expect";
import { act, screen } from "@testing-library/react";
import { preloadedStateLoggedIn } from "../utils/testUtils/preloadedStates";
import { renderRouterWithProviders } from "../utils/testUtils/renderWithProviders";
import userEvent from "@testing-library/user-event";
beforeAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the router", () => {
  describe("When the app renders, the user clicks on the burger menu and then clicks to my profile", () => {
    test("Then there should be a title My Drone Schemas", async () => {
      renderRouterWithProviders(preloadedStateLoggedIn);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));
      const MyProfileLink = screen.getByRole("link", { name: "My Profile" });
      await act(async () => await userEvent.click(MyProfileLink));

      const myProfileTitle = await screen.findByText("My Drone Schemas");
      expect(myProfileTitle).toBeInTheDocument();
    });
  });

  describe("When the app renders, the user clicks on the burger menu and then clicks to my Create a Drone Schema", () => {
    test("Then there should be a title My Drone Schemas", async () => {
      renderRouterWithProviders(preloadedStateLoggedIn);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));
      await act(async () => await userEvent.click(burgerButton));

      const CreateDroneSchema = screen.getByRole("link", {
        name: "Create a Drone Schema",
      });
      await act(async () => await userEvent.click(CreateDroneSchema));

      const myProfileTitle = await screen.findByText("Create a Drone");
      expect(myProfileTitle).toBeInTheDocument();
    });
  });

  describe("When the app renders, the user clicks on the image of a droneCard", () => {
    test("Then there should be a title My Drone Schemas", async () => {
      renderRouterWithProviders(preloadedStateLoggedIn);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));
      await act(async () => await userEvent.click(burgerButton));

      const CreateDroneSchema = screen.getByRole("link", {
        name: "Explore Schemas",
      });
      await act(async () => await userEvent.click(CreateDroneSchema));

      const DroneImage = await screen.findByAltText("drone");
      await act(async () => await userEvent.click(DroneImage));

      const myProfileTitle = await screen.findByText("Drone Images");
      expect(myProfileTitle).toBeInTheDocument();
    });
  });

  describe("When the app renders, the user isn't logged in and clicks on the Link 'Register'", () => {
    test("Then there should be a title 'Create an Account'", async () => {
      renderRouterWithProviders({
        ui: { isError: false, isLoading: false, modal: "" },
        user: { email: "", id: "", isLogged: false, token: "" },
      });

      const registerLink = await screen.findByText("Register");
      await act(async () => await userEvent.click(registerLink));

      const registerPageTitle = await screen.findByText("Create an Account");
      expect(registerPageTitle).toBeInTheDocument();
    });
  });
});
