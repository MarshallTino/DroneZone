import { User, UserState } from "./types";
import { initialState, loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it is invoked with a loginUser action and passed a User", () => {
    test("Then it should set the isLogged property of the currentUserState to true and return the user email and token", () => {
      const user: User = {
        email: "marcelmartino2053@gmail.com",
        token: "kksd932lf0322ff4",
        id: "",
      };

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
});
