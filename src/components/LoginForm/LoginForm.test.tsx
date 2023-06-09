import { act, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../hooks/useUser/types";
import LoginForm from "./LoginForm";
import { renderRouterWithProviders } from "../../utils/testUtils/renderWithProviders";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a loginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Sign in to your DroneZone'", () => {
      renderRouterWithProviders({}, <LoginForm />);

      const loginFormHeading = screen.getByRole("heading", {
        name: "Sign In to your DroneZone.",
      });

      expect(loginFormHeading).toBeInTheDocument();
    });
    test("Then it should showan input with the placeholder 'Password'", () => {
      renderRouterWithProviders({}, <LoginForm />);

      const passwordInput = screen.getByPlaceholderText("Password");

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show an input with the placeholder 'Email'", () => {
      renderRouterWithProviders({}, <LoginForm />);

      const emailInput = screen.getByPlaceholderText("Email");

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign In'", () => {
      renderRouterWithProviders({}, <LoginForm />);

      const genericButton = screen.getByRole("button", {
        name: "Sign In",
      });

      expect(genericButton).toBeInTheDocument();
    });
  });

  describe("When the user types 'marcelmartino2053@gmail.com' on the email input", () => {
    test("Then the value of the email input should be 'marcelmartino2053@gmail.com'", async () => {
      const email = "marcelmartino2053@gmail.com";

      renderRouterWithProviders(
        { user: { email: "", id: "", isLogged: false, token: "" } },
        <LoginForm />
      );

      const emailInput = screen.getByPlaceholderText("Email");

      await act(async () => await userEvent.type(emailInput, email));

      expect(emailInput).toHaveValue(email);
    });
  });

  describe("When the user types 'MarshallTino' on the email input", () => {
    test("Then the value of the password input should be 'MarshallTino'", async () => {
      const password = "MarshallTino";

      renderRouterWithProviders({}, <LoginForm />);

      const passswordInput = screen.getByPlaceholderText("Password");

      await act(async () => await userEvent.type(passswordInput, password));

      expect(passswordInput).toHaveValue(password);
    });
  });

  describe("When the user submits the form", () => {
    test("The loginUser function should be called", async () => {
      const mockUser: UserCredentials = {
        email: "marcelmartino2053@gmail.com",
        password: "MarshallTino",
      };

      renderRouterWithProviders({}, <LoginForm />);

      const emailInput = screen.getByPlaceholderText("Email");
      const passswordInput = screen.getByPlaceholderText("Password");
      const submitButton = screen.getByRole("button");

      await act(async () => await userEvent.type(emailInput, mockUser.email));
      await act(
        async () => await userEvent.type(passswordInput, mockUser.password)
      );
      await act(async () => await userEvent.click(submitButton));

      expect(mockLoginUser).toHaveBeenCalledWith(mockUser);
    });
  });
});
