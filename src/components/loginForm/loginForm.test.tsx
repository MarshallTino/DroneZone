import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import LoginForm from "./loginForm";

describe("Given a loginForm component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a heading with the title 'Sign in to your DroneZone', 2 inputs and a button with the text 'sign in'", () => {
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );

      const loginFormHeading = screen.getByRole("heading", {
        name: "Sign In to your DroneZone.",
      });

      expect(loginFormHeading).toBeInTheDocument();
    });
  });
});
