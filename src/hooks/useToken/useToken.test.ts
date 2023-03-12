import { renderHook } from "@testing-library/react";
import { useAppDispatch } from "../../store/hooks";
import Wrapper from "../../utils/testUtils/Wrapper";
import { CustomTokenPayload } from "../useUser/types";
import useToken from "./useToken";
import decodeToken from "jwt-decode";

jest.mock("../../store/hooks");

jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

const mockTokenPayload: CustomTokenPayload = {
  email: "marshall@gmail.com",
  id: "33333",
};

describe("Given a useToken custom hook", () => {
  describe("When a token exists", () => {
    test("Then the dispatch should be called", () => {
      const mockedToken = "marshall2343";
      localStorage.setItem("token", mockedToken);

      const mockedDispatch = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(mockedDispatch);

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(mockedDispatch).toHaveBeenCalled();

      localStorage.clear();
    });

    test("Then it should remove the token from the local storage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      removeToken();

      expect(localStorage.getItem("token")).toBeNull();
    });
  });

  describe("When its getToken function is called but there isn't a token", () => {
    test("Then it should not call loginUserActionCreator", () => {
      const dispatchMock = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });
});
