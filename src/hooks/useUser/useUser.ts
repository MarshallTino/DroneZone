import jwt_decode from "jwt-decode";
import {
  setIsLoadingActionCreator,
  showModalActionCreator,
  unSetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-type": "application/json" },
      });
      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = jwt_decode(token);

      const { email, id } = tokenPayload;

      dispatch(loginUserActionCreator({ email, id, token }));
      localStorage.setItem("token", token);
      dispatch(unSetIsLoadingActionCreator());
    } catch {
      dispatch(unSetIsLoadingActionCreator());
      dispatch(
        showModalActionCreator({ modal: "Invalid credentials", isError: true })
      );
    }
  };

  return { loginUser };
};

export default useUser;
