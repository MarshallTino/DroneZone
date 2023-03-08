import { JwtPayload } from "jwt-decode";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  email: string;
}
