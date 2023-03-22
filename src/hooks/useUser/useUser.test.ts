import { act, renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import Wrapper from "../../utils/testUtils/Wrapper";
import { User } from "../../store/features/user/types";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { CustomTokenPayload, UserCredentials, UserRegisterData } from "./types";
import useUser from "./useUser";
import { store } from "../../store/store";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { showModalActionCreator } from "../../store/features/uiSlice/uiSlice";

beforeAll(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

const spy = jest.spyOn(store, "dispatch");

jest.mock("jwt-decode", () => jest.fn());

const mockedToken = "aj39jdjadjawdij";

const mockTokenPayload: CustomTokenPayload = {
  email: "marcelmartino2053@gmail.com",
  sub: "5",
};

const userCredentials: UserCredentials = {
  email: "marcelmartino2053@gmail.com",
  password: "MarshallTino",
};

const mockUserRegister: UserRegisterData = {
  email: "marshalltinooo@gmail.com",
  password: "AISjdiwja",
  username: "patatafrita",
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
      expect(spy).toHaveBeenCalledWith(
        showModalActionCreator({ modal: "Invalid credentials", isError: true })
      );
    });
  });

  describe("When its logoutUser function is called", () => {
    test("Then the removeToken function and the dispatch should be called with the logout userActionCreator", async () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });
      await act(async () => logoutUser());

      expect(spy).toHaveBeenCalled();
    });
  });
});

describe("When the registerUser function is called with the username: 'patatafrita', email: 'marshalltinooo@gmail.com' and password: 'aedawdawdawd'", () => {
  test("Then it should call the dispatch showModalAction", async () => {
    const {
      result: {
        current: { registerUser },
      },
    } = renderHook(() => useUser(), { wrapper: Wrapper });

    await registerUser(mockUserRegister);

    expect(spy).toHaveBeenCalledWith(
      showModalActionCreator({
        isError: false,
        modal: "The user has been created!",
      })
    );
  });

  test("Then it should call the dispatch for succes toast", async () => {
    const modalPayload = {
      isError: false,
      modal: "The user has been created!",
    };

    const {
      result: {
        current: { registerUser },
      },
    } = renderHook(() => useUser(), { wrapper: Wrapper });

    await registerUser(mockUserRegister);

    expect(spy).toHaveBeenCalledWith(showModalActionCreator(modalPayload));
  });
});

describe("When the response is not ok", () => {
  beforeAll(() => {
    server.resetHandlers(...errorHandlers);
  });

  test("Then it should throw an error", async () => {
    const modalPayload = {
      isError: true,
      modal: "Couldn't create user. Try again!",
    };

    const {
      result: {
        current: { registerUser },
      },
    } = renderHook(() => useUser(), { wrapper: Wrapper });

    await registerUser({
      email: "",
      username: "",
      password: "",
    });

    expect(spy).toHaveBeenCalledWith(showModalActionCreator(modalPayload));
  });
});
