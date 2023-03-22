import { act, renderHook } from "@testing-library/react";
import { mockedDrone, mockedDrones } from "../../mocks/dronesArray";
import {
  createDroneHandler,
  errorCreateDroneHandler,
  errorHandlers,
  getUserDronesEmpty,
  handlers,
} from "../../mocks/handlers";
import { server } from "../../mocks/server";
import {
  createDroneActionCreator,
  loadDroneActionCreator,
} from "../../store/features/dronesSlice/dronesSlice";
import { showModalActionCreator } from "../../store/features/uiSlice/uiSlice";
import { store } from "../../store/store";
import Wrapper from "../../utils/testUtils/Wrapper";
import useDrones from "./useDrones";
import FormDataPolyfill from "form-data";

beforeAll(() => {
  jest.clearAllMocks();
});

beforeEach(() => {
  jest.clearAllMocks();
});

const spy = jest.spyOn(store, "dispatch");

describe("Given a useDrones hook", () => {
  describe("Given the createDrone function", () => {
    describe("When it is called passing it a correct formdata", () => {
      test("Then it should call the dispatch with the created drone", async () => {
        server.resetHandlers(...createDroneHandler);
        const {
          result: {
            current: { createDrone },
          },
        } = renderHook(() => useDrones(), { wrapper: Wrapper });

        const newDrone = new FormDataPolyfill({ readable: true });

        await createDrone(newDrone as unknown as FormData);

        expect(spy).toHaveBeenNthCalledWith(
          4,
          createDroneActionCreator(mockedDrone)
        );
      });

      describe("When it is called passing it an incorrect formdata", () => {
        test("Then it shouldn't call the dispatch with the created drone", async () => {
          server.resetHandlers(...errorCreateDroneHandler);
          const {
            result: {
              current: { createDrone },
            },
          } = renderHook(() => useDrones(), { wrapper: Wrapper });

          const newDrone = new FormDataPolyfill({ readable: true });

          await createDrone(newDrone as unknown as FormData);

          expect(spy).toHaveBeenCalledTimes(4);
        });
      });

      describe("When it is called with wrong form data", () => {
        server.resetHandlers(...errorHandlers);

        test("Then it should call the dispatch with the loadMoadlAction creator, isError true and the modal mesage of 'The drone couldn't be created'", async () => {
          const {
            result: {
              current: { createDrone },
            },
          } = renderHook(() => useDrones(), { wrapper: Wrapper });

          await createDrone(new FormData());

          expect(spy).toHaveBeenCalledWith(
            showModalActionCreator({
              isError: true,
              modal: "The drone couldn't be created.",
            })
          );
        });
      });

      describe("Given a useDrones hook and the findDroneById function", () => {
        describe("When the findDroneById is called", () => {
          test("Then it should call the loadEvent dispatch", async () => {
            server.use(...handlers);
            const {
              result: {
                current: { findDroneById },
              },
            } = renderHook(() => useDrones(), { wrapper: Wrapper });
            await act(
              async () => await findDroneById("640f22ef6dc189aa4e9462f4")
            );

            expect(spy).toHaveBeenNthCalledWith(
              4,
              loadDroneActionCreator(mockedDrone)
            );
          });
        });

        describe("When the response respond with an error", () => {
          test("Then it should call the openModal action creator with an error", async () => {
            server.use(...errorHandlers);
            const {
              result: {
                current: { findDroneById },
              },
            } = renderHook(() => useDrones(), { wrapper: Wrapper });

            await findDroneById(mockedDrone.id);

            expect(spy).toHaveBeenNthCalledWith(
              4,
              showModalActionCreator({
                isError: true,
                modal: "No Drone found.",
              })
            );
          });
        });
      });

      describe("When its getDrones function is called", () => {
        test("Then the loadDronesAction of the dronesSlice should be called", async () => {
          server.resetHandlers(...handlers);
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

      describe("When its getUserDrones function is called and responds with an empty array", () => {
        test("Then the showModalaction should be called", async () => {
          server.use(...getUserDronesEmpty);

          const {
            result: {
              current: { getUserDrones },
            },
          } = renderHook(() => useDrones(), { wrapper: Wrapper });

          await getUserDrones();
          expect(spy).toHaveBeenCalled();
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
          expect(spy).toHaveBeenNthCalledWith(5, {
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
          expect(spy).not.toHaveBeenCalledWith({
            drones: mockedDrone,
            drone: mockedDrone,
          });
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
            4,
            showModalActionCreator({
              isError: true,
              modal: "You have not created any Drones.",
            })
          );
        });
      });
    });
  });
});
