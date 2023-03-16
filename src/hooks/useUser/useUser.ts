import jwt_decode from "jwt-decode";
import {
  resetModalActionCreator,
  setIsLoadingActionCreator,
  showModalActionCreator,
  unSetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import useToken from "../useToken/useToken";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
}

const useUser = (): UseUserStructure => {
  const { removeToken } = useToken();
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    dispatch(resetModalActionCreator());
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-type": "application/json" },
      });
      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = jwt_decode(token);

      const { email, sub: id } = tokenPayload;

      dispatch(loginUserActionCreator({ email, id, token }));
      localStorage.setItem("token", token);
      dispatch(unSetIsLoadingActionCreator());
    } catch {
      dispatch(
        showModalActionCreator({ modal: "Invalid credentials", isError: true })
      );
      dispatch(unSetIsLoadingActionCreator());
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  return { loginUser, logoutUser };
};

export default useUser;
