import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { store } from "../../store/store";
import Wrapper from "../../utils/testUtils/Wrapper";
import useDrones from "./useDrones";

beforeAll(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

const spy = jest.spyOn(store, "dispatch");

describe("Given a useDrones hook", () => {
  describe("When its getDrones function is called", () => {
    test("Then the loadDronesAction of the dronesSlice should be called", async () => {
      const {
        result: {
          current: { getDrones },
        },
      } = renderHook(() => useDrones(), { wrapper: Wrapper });

      await getDrones();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("When its getDrones function is called and responds with an error", () => {
    test("Then the loadDronesAction of the dronesSlice should be called", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getDrones },
        },
      } = renderHook(() => useDrones(), { wrapper: Wrapper });

      await getDrones();
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
