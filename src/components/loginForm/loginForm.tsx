import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./loginFormStyled";

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useUser();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await loginUser({
      email,
      password,
    });
  };

  return (
    <LoginFormStyled className="login">
      <div className="login__header">
        <h3>Sign In to your DroneZone.</h3>
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="login__button" text="sign in" disabled={false} />
      </form>
      <h2 className="login__message">Don't have an account? Sign Up.</h2>
    </LoginFormStyled>
  );
};
export default LoginForm;
