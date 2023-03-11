import jwt_decode from "jwt-decode";
import { showToast } from "../../modals/modals";
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
    } catch {
      showToast({ message: "Invalid credentials", type: "error" });
    }
  };

  return { loginUser };
};

export default useUser;
