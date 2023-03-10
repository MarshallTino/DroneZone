import { act, renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import Wrapper from "../../utils/testUtils/Wrapper";
import { User } from "../../store/features/user/types";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { CustomTokenPayload, UserCredentials } from "./types";
import useUser from "./useUser";
import { store } from "../../store/store";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

beforeAll(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

const spy = jest.spyOn(store, "dispatch");

const mockShowToast = jest.fn();

jest.mock("../../modals/modals", () => ({
  ...jest.requireActual("../../modals/modals"),
  showToast: () => mockShowToast("Invalids credentials"),
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
      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockedUser));
    });
  });

  describe("When its loginUser function is called with the worng credentials email 'marcelmartino2053@gmail.com' and the password 'Marcelus'", () => {
    test("Then the function showErrorToast should be called", async () => {
      server.resetHandlers(...errorHandlers);
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

      const userCredentialss: UserCredentials = {
        email: "marcelmartino2053@gmail.com",
        password: "MarshalTino",
      };

      await act(async () => loginUser(userCredentialss));
      expect(mockShowToast).toHaveBeenCalledWith("Invalids credentials");
    });
  });
});
