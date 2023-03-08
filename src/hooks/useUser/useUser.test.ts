import { act, renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { CustomTokenPayload, UserCredentials } from "./types";
import useUser from "./useuser";
import decodeToken from "jwt-decode";
import { User } from "../../store/userSlice/types";
import { loginUserActionCreator } from "../../store/userSlice/userSlice";

beforeAll(() => {
  jest.clearAllMocks();
});

const mockDispatcher = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

jest.mock("jwt-decode", () => jest.fn());

const mockedToken = "aj39jdjadjawdij";

const mockTokenPayload: CustomTokenPayload = {
  email: "marcelmartino2053@gmail.com",
  id: "5",
};

const userCredentials: UserCredentials = {
  email: "marcelmartino2053@gmail.com",
  password: "MarshallTino",
};

describe("Given a useUser hook", () => {
  describe("When its loginUser function is called with the email 'marcelmartino2053@gmail.com' and the password 'MarshallTino'", () => {
    test("Then the login action of userSlice should be called", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockedUser: User = {
        email: "marcelmartino2053@gmail.com",
        id: "5",
        token: mockedToken,
      };

      await act(async () => loginUser(userCredentials));
      expect(mockDispatcher).toHaveBeenCalledWith(
        loginUserActionCreator(mockedUser)
      );
    });
  });
});
