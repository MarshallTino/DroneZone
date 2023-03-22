import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
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
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UserRegisterData,
} from "./types";

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
  registerUser: (registerUserData: UserRegisterData) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const { removeToken } = useToken();
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const registerUser = async (registerUserData: UserRegisterData) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(`${apiUrl}/user/register`, {
        method: "POST",
        body: JSON.stringify(registerUserData),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Couldn't create user. Try again!");
      }

      dispatch(
        showModalActionCreator({
          isError: false,
          modal: "The user has been created!",
        })
      );
      dispatch(unSetIsLoadingActionCreator());
      navigate("/login");
    } catch (error) {
      dispatch(
        showModalActionCreator({
          isError: true,
          modal: "Couldn't create user. Try again!",
        })
      );
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  return { loginUser, logoutUser, registerUser };
};

export default useUser;
