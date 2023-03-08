import { useAppDispatch } from "../store/hooks";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";
import jwt_decode from "jwt-decode";
import { loginUserActionCreator } from "../store/userSlice/userSlice";
const useUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}/user/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-type": "application/json" },
    });

    const { token } = (await response.json()) as LoginResponse;

    const tokenPayload: CustomTokenPayload = jwt_decode(token);

    const { email, id } = tokenPayload;

    dispatch(loginUserActionCreator({ email, id, isLogged: true, token }));
    localStorage.setItem("token", token);
  };

  return { loginUser };
};

export default useUser;
