import { mockedDrones } from "../../../mocks/dronesArray";
import {
  dronesInitialState,
  dronesReducer,
  loadDronesActionCreator,
} from "./dronesSlice";

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
});
