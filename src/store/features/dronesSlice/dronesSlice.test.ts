import { mockedDrone, mockedDrones } from "../../../mocks/dronesArray";
import {
  deleteDronesActionCreator,
  dronesInitialState,
  dronesReducer,
  loadDronesActionCreator,
} from "./dronesSlice";
import { DronesState } from "./types";

describe("Given a dronesReducer", () => {
  describe("When its loadDrones action is called passing it a drones array", () => {
    test("Then the value of the store should contain the array of the drones passed", () => {
      const loadDronesAction = loadDronesActionCreator(mockedDrones);
      const newDronesState = dronesReducer(
        dronesInitialState,
        loadDronesAction
      );

      expect(newDronesState).toStrictEqual({ drones: mockedDrones });
    });
  });

  describe("When its deleteDrones action is called passing it an ID", () => {
    test("Then drone with the passed ID should not be in the store", () => {
      const deleteDroneAction = deleteDronesActionCreator(mockedDrone);
      const expectedDrones: DronesState = { drones: [] };
      const newDronesState = dronesReducer(
        { drones: mockedDrones },
        deleteDroneAction
      );

      expect(newDronesState).toStrictEqual(expectedDrones);
    });
  });
});
