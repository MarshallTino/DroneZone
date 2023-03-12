import { useCallback } from "react";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload } from "../useUser/types";
import jwt_decode from "jwt-decode";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { email, id } = jwt_decode<CustomTokenPayload>(token);
      dispatch(
        loginUserActionCreator({
          email,
          id,
          token,
        })
      );
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };
  return { getToken, removeToken };
};

export default useToken;
