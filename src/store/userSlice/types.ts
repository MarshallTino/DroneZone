export interface User {
  email: string;
  token: string;
  id: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface LoginResponse {
  token: string;
}
