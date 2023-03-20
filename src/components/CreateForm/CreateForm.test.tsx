import { act, screen } from "@testing-library/react";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../utils/testUtils/renderWithProviders";
import CreateForm from "./CreateFrom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const mockCreateDrone = jest.fn();

jest.mock("../../hooks/useDrones/useDrones", () => () => ({
  createDrone: mockCreateDrone,
}));

describe("Given a createForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Create Drone Button to submit the form", () => {
      renderWithProviders(<CreateForm />);

      const submitButton = screen.getByRole("button", { name: "Create Drone" });
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe("When the user types on the Motor Name", () => {
    test("Then it should change th evalue of this input", async () => {
      renderRouterWithProviders({}, <CreateForm />);

      const motorNameInput = screen.getByLabelText("Motor Name");

      await act(async () => await userEvent.type(motorNameInput, "EMAX 2207"));
      expect(motorNameInput).toHaveValue("EMAX 2207");
    });
  });

  describe("When the user uploads an image to schema Image input", () => {
    test("Then it should change the value of this input", async () => {
      renderRouterWithProviders({}, <CreateForm />);
      const picture = new File(["drone"], "drone.jpg", {
        type: "image/jpg",
      });
      const schemaImageInput = screen.getByLabelText("Schema Image");

      await act(async () => await userEvent.upload(schemaImageInput, picture));
      expect(schemaImageInput).toHaveValue("C:\\fakepath\\drone.jpg");
    });
  });

  describe("When its submit button is called", () => {
    test("Then it should show call the custom Hook createDrone", async () => {
      renderWithProviders(<CreateForm />);

      const submitButton = screen.getByRole("button", {
        name: "Create Drone",
      });
      await act(async () => await userEvent.click(submitButton));

      expect(mockCreateDrone).toHaveBeenCalled();
    });
  });
});
