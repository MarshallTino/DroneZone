import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When rendered with the class 'primary__button', with the text 'Primary' and with the action 'action'", () => {
    test("It should render a button with the class 'primary__button', the text 'Primary', and the function 'action'", () => {
      const action = jest.fn;

      render(
        <Button
          disabled={false}
          className="primary__button"
          text={"primary"}
          action={action}
        />
      );

      const genericButton = screen.getByRole("button", {
        name: "primary",
      });

      expect(genericButton).toBeInTheDocument();
    });
  });

  describe("When it receives a function and the user clicks on the button", () => {
    test("Then the action should have been called", async () => {
      const action = jest.fn();

      render(
        <Button
          disabled={false}
          className="primary__button"
          text={"primary"}
          action={action}
        />
      );

      const genericButton = screen.getByRole("button", {
        name: "primary",
      });
      expect(genericButton).toBeInTheDocument();
      await userEvent.click(genericButton);
      expect(action).toHaveBeenCalled();
    });
  });
});
