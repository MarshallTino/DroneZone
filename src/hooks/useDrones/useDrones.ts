import { useCallback } from "react";
import {
  createDroneActionCreator,
  deleteDronesActionCreator,
  loadDronesActionCreator,
} from "../../store/features/dronesSlice/dronesSlice";
import {
  ApiResponse,
  DroneStructure,
  UserDronesResponse,
} from "../../store/features/dronesSlice/types";
import {
  resetModalActionCreator,
  setIsLoadingActionCreator,
  showModalActionCreator,
  unSetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CreateDroneResponse } from "./types";

const apiUrl = process.env.REACT_APP_API_URL;

const useDrones = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);

  const getDrones = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(`${apiUrl}/drones`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      const drones = (await response.json()) as ApiResponse;
      dispatch(unSetIsLoadingActionCreator());

      dispatch(loadDronesActionCreator(drones.drones));
    } catch (error) {
      dispatch(unSetIsLoadingActionCreator());

      return (error as Error).message;
    }
  }, [dispatch]);

  const getUserDrones = useCallback(async () => {
    dispatch(resetModalActionCreator());
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(`${apiUrl}/drones/user-drones`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const drones = (await response.json()) as UserDronesResponse;
      !drones.userDrones[0] &&
        dispatch(
          showModalActionCreator({
            modal: "You have not created any Drones.",
            isError: true,
          })
        );
      dispatch(unSetIsLoadingActionCreator());
      dispatch(loadDronesActionCreator(drones.userDrones));
    } catch (error) {
      dispatch(unSetIsLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          modal: "You have not created any Drones.",
          isError: true,
        })
      );
      return (error as Error).message;
    }
  }, [dispatch, token]);

  const deleteDrone = useCallback(
    async (drone: DroneStructure) => {
      try {
        dispatch(resetModalActionCreator());
        dispatch(setIsLoadingActionCreator());

        const response = await fetch(`${apiUrl}/drones/delete/${drone.id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("The Drone couldn't be deleted");
        }

        dispatch(unSetIsLoadingActionCreator());
        dispatch(deleteDronesActionCreator(drone));
      } catch (error) {
        dispatch(unSetIsLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            isError: true,
            modal: "The Drone couldn't be deleted",
          })
        );
      }
    },
    [dispatch, token]
  );

  const createDrone = useCallback(
    async (drone: FormData) => {
      try {
        dispatch(resetModalActionCreator());
        dispatch(setIsLoadingActionCreator());
        const response = await fetch(`${apiUrl}/drones/create-drone`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "multipart/form-data",
          },
          body: { ...drone },
        });

        const createdDrone = (await response.json()) as CreateDroneResponse;

        dispatch(createDroneActionCreator(createdDrone.drone));
        dispatch(unSetIsLoadingActionCreator());
      } catch (error) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modal: "The drone couldn't be created.",
          })
        );
        dispatch(unSetIsLoadingActionCreator());
      }
    },
    [dispatch, token]
  );

  return { getUserDrones, getDrones, deleteDrone, createDrone };
};

export default useDrones;
