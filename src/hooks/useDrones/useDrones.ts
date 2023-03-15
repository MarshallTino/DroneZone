import { useCallback } from "react";
import { loadDronesActionCreator } from "../../store/features/dronesSlice/dronesSlice";
import {
  ApiResponse,
  UserDronesResponse,
} from "../../store/features/dronesSlice/types";
import {
  setIsLoadingActionCreator,
  showModalActionCreator,
  unSetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

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
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(`${apiUrl}/drones/userDrones`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const drones = (await response.json()) as UserDronesResponse;
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
  return { getUserDrones, getDrones };
};

export default useDrones;
