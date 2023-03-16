import { renderHook } from "@testing-library/react";
import { mockedDrone, mockedDrones } from "../../mocks/dronesArray";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { showModalActionCreator } from "../../store/features/uiSlice/uiSlice";
import { store } from "../../store/store";
import Wrapper from "../../utils/testUtils/Wrapper";
import useDrones from "./useDrones";

beforeAll(() => {
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
      expect(spy).toHaveBeenNthCalledWith(3, {
        payload: mockedDrones,
        type: "drones/loadDrones",
      });
    });
  });

  describe("When its getDrones function is called and responds with an error", () => {
    test("Then the loadDronesAction of the dronesSlice should not be called", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getDrones },
        },
      } = renderHook(() => useDrones(), { wrapper: Wrapper });

      await getDrones();
      expect(spy).not.toHaveBeenCalledWith(mockedDrones);
    });
  });

  describe("When its deleteDrone function is called", () => {
    test("Then the loadDronesAction of the dronesSlice should be called", async () => {
      const {
        result: {
          current: { deleteDrone },
        },
      } = renderHook(() => useDrones(), { wrapper: Wrapper });

      await deleteDrone(mockedDrone);
      expect(spy).toHaveBeenNthCalledWith(4, {
        payload: mockedDrone,
        type: "drones/deleteDrones",
      });
    });
  });

  describe("When its deleteDrone function is called and responds with an error", () => {
    test("Then the loadDronesAction of the dronesSlice should not be called", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { deleteDrone },
        },
      } = renderHook(() => useDrones(), { wrapper: Wrapper });

      await deleteDrone(mockedDrone);
      expect(spy).not.toHaveBeenCalledWith({ drones: mockedDrone });
    });
  });

  describe("When its getUserDrones function is called", () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      });
    });

    test("Then the loadDronesAction of the dronesSlice should be called", async () => {
      const token = "";

      const {
        result: {
          current: { getUserDrones },
        },
      } = renderHook(() => useDrones(), { wrapper: Wrapper });

      await getUserDrones();

      expect(global.fetch).toHaveBeenCalledWith(
        `${process.env.REACT_APP_API_URL}/drones/user-drones`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "GET",
        }
      );
    });
  });

  describe("When its getUserDrones function is called and responds with an error", () => {
    test("Then the loadDronesAction of the dronesSlice should be called", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { getUserDrones },
        },
      } = renderHook(() => useDrones(), { wrapper: Wrapper });

      await getUserDrones();
      expect(spy).toHaveBeenNthCalledWith(
        3,
        showModalActionCreator({
          isError: true,
          modal: "You have not created any Drones.",
        })
      );
    });
  });
});
