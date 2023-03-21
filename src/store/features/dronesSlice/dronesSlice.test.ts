import { mockedDrone, mockedDrones } from "../../../mocks/dronesArray";
import {
  createDroneActionCreator,
  deleteDronesActionCreator,
  dronesInitialState,
  dronesReducer,
  loadDroneActionCreator,
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

      expect(newDronesState).toStrictEqual({
        drones: mockedDrones,
        drone: {
          id: "",

          droneImage: "",
          schemaImage: "",
          creator: "",
          creatorName: "",

          categories: {
            difficulty: "",
            transmissionType: "",
            droneClass: "",
          },
          components: {
            motor: {
              name: "",
              pricePerUnit: 0,
              quantity: 0,
              image: "",
            },
            frame: {
              name: "",
              sizeOrmountingSize: "",
              pricePerUnit: 0,
              image: "",
            },
            esc: {
              name: "",
              pricePerUnit: 0,
              quantity: 0,
              image: "",
            },
            camera: {
              name: "",
              pricePerUnit: 0,
              sizeOrmountingSize: "",
              image: "",
            },
            vtx: {
              name: "",
              pricePerUnit: 0,
              connector: "",
              power: "",
              image: "",
            },
            propeller: {
              name: "",
              pricePerUnit: 0,
              sizeOrmountingSize: "",
              quantity: 0,
              image: "",
            },
            controller: {
              name: "",
              pricePerUnit: 0,
              type: "",
              image: "",
            },
            battery: {
              name: "",
              pricePerUnit: 0,
              batteryVoltage: "",
              batteryCapacity: "",
              image: "",
            },
            vtxAntenna: {
              name: "",
              pricePerUnit: 0,
              connector: "",
              image: "",
            },
            receiver: {
              name: "",
              pricePerUnit: 0,
              protocol: "",
              telemetry: "",
              image: "",
            },
          },
        },
      });
    });
  });

  describe("When its deleteDrones action is called passing it an ID", () => {
    test("Then drone with the passed ID should not be in the store", () => {
      const deleteDroneAction = deleteDronesActionCreator(mockedDrone);
      const expectedDrones: DronesState = { drones: [], drone: mockedDrone };
      const newDronesState = dronesReducer(
        { drones: mockedDrones, drone: mockedDrone },
        deleteDroneAction
      );

      expect(newDronesState).toStrictEqual(expectedDrones);
    });
  });

  describe("When its createDrone action is called passing it a drone", () => {
    test("Then the drone should be added to the store", () => {
      const createDroneAction = createDroneActionCreator(mockedDrone);
      const expectedDrones: DronesState = {
        drones: [mockedDrone],
        drone: mockedDrone,
      };
      const newDronesState = dronesReducer(
        { drones: [], drone: mockedDrone },
        createDroneAction
      );

      expect(newDronesState).toStrictEqual(expectedDrones);
    });
  });

  describe("When it receives a new state and an action to loadEvent", () => {
    describe("Then it should load that event", () => {
      const loadDroneAction = loadDroneActionCreator(mockedDrone);
      const expectedNewEvent: DronesState = {
        drones: [],
        drone: mockedDrone,
      };

      const loadedEvent = dronesReducer(dronesInitialState, loadDroneAction);

      expect(expectedNewEvent).toStrictEqual(loadedEvent);
    });
  });
});
