import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { registerUser } = useUser();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await registerUser({
      email,
      password,
      username,
    });
  };

  return (
    <RegisterFormStyled className="register">
      <div className="register__header">
        <h2>Create an Account</h2>
      </div>
      <form className="register__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button className="register__button" text="Register" disabled={false} />
      </form>
      <span className="register__message">
        Don't have an account?
        <Link to="/login" className="register__link">
          Sign In
        </Link>
      </span>
    </RegisterFormStyled>
  );
};
export default RegisterForm;
