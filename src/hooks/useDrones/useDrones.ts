import { useCallback } from "react";
import { loadDronesActionCreator } from "../../store/features/dronesSlice/dronesSlice";
import { Drones } from "../../store/features/dronesSlice/types";
import { useAppDispatch } from "../../store/hooks";

const apiUrl = process.env.REACT_APP_API_URL;

const useDrones = () => {
  const dispatch = useAppDispatch();

  const getDrones = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/drones`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      const drones = (await response.json()) as Drones;

      dispatch(loadDronesActionCreator(drones));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);
  return { getDrones };
};

export default useDrones;
