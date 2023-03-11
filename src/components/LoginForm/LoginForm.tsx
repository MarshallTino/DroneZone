import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useUser();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await loginUser({
      email,
      password,
    });
  };

  return (
    <LoginFormStyled className="login">
      <div className="login__header">
        <h2>Sign In to your DroneZone.</h2>
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button className="login__button" text="sign in" disabled={false} />
      </form>
      <span className="login__message">Don't have an account? Sign Up.</span>
    </LoginFormStyled>
  );
};
export default LoginForm;
