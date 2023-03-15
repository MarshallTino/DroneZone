import { User, UserState } from "./types";
import {
  initialState,
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer", () => {
  const user: User = {
    email: "marcelmartino2053@gmail.com",
    token: "kksd932lf0322ff4",
    id: "",
  };
  describe("When it is invoked with a loginUser action and passed a User", () => {
    test("Then it should set the isLogged property of the currentUserState to true and return the user email and token", () => {
      const expectedUserState: UserState = {
        id: user.id,
        token: user.token,
        email: user.email,
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(user);
      const newUserState = userReducer(initialState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When the user is logged in and it is invoked with a logOut action", () => {
    test("Then it should set the isLogged property to false", () => {
      loginUserActionCreator(user);

      const expectedUserState = userReducer(
        initialState,
        logoutUserActionCreator
      );

      expect(expectedUserState).toStrictEqual(initialState);
    });
  });
});
