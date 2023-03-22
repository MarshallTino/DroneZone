import { act, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { UserRegisterData } from "../../hooks/useUser/types";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";
import RegisterForm from "./RegisterForm";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Create an Account'", () => {
      renderRouterWithProviders({}, <RegisterForm />);

      const RegisterFormHeading = screen.getByRole("heading", {
        name: "Create an Account",
      });

      expect(RegisterFormHeading).toBeInTheDocument();
    });
    test("Then it should show an input with the placeholder 'Password'", () => {
      renderRouterWithProviders({}, <RegisterForm />);

      const passwordInput = screen.getByPlaceholderText("Password");

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show an input with the placeholder 'Username'", () => {
      renderRouterWithProviders({}, <RegisterForm />);

      const userNameInput = screen.getByPlaceholderText("Username");

      expect(userNameInput).toBeInTheDocument();
    });

    test("Then it should show an input with the placeholder 'Email'", () => {
      renderRouterWithProviders({}, <RegisterForm />);

      const emailInput = screen.getByPlaceholderText("Email");

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Register'", () => {
      renderRouterWithProviders({}, <RegisterForm />);

      const genericButton = screen.getByRole("button", {
        name: "Register",
      });

      expect(genericButton).toBeInTheDocument();
    });
  });

  describe("When the user types 'marcelmartino2053@gmail.com' on the email input", () => {
    test("Then the value of the email input should be 'marcelmartino2053@gmail.com'", async () => {
      const email = "marcelmartino2053@gmail.com";

      renderRouterWithProviders(
        { user: { email: "", id: "", isLogged: false, token: "" } },
        <RegisterForm />
      );

      const emailInput = screen.getByPlaceholderText("Email");

      await act(async () => await userEvent.type(emailInput, email));

      expect(emailInput).toHaveValue(email);
    });
  });

  describe("When the user types 'MarshallTino' on the password input", () => {
    test("Then the value of the password input should be 'MarshallTino'", async () => {
      const password = "MarshallTino";

      renderRouterWithProviders({}, <RegisterForm />);

      const passswordInput = screen.getByPlaceholderText("Password");

      await act(async () => await userEvent.type(passswordInput, password));

      expect(passswordInput).toHaveValue(password);
    });
  });

  describe("When the user submits the form", () => {
    test("The the registeruser function should be called", async () => {
      const mockUser: UserRegisterData = {
        username: "SUSU",
        email: "marcelmartino2053@gmail.com",
        password: "MarshallTino",
      };

      renderRouterWithProviders({}, <RegisterForm />);

      const emailInput = screen.getByPlaceholderText("Email");
      const passswordInput = screen.getByPlaceholderText("Password");
      const usernameInput = screen.getByPlaceholderText("Username");

      const submitButton = screen.getByRole("button");

      await act(async () => await userEvent.type(emailInput, mockUser.email));
      await act(
        async () => await userEvent.type(usernameInput, mockUser.username)
      );

      await act(
        async () => await userEvent.type(passswordInput, mockUser.password)
      );
      await act(async () => await userEvent.click(submitButton));

      expect(mockRegisterUser).toHaveBeenCalledWith(mockUser);
    });
  });
});
