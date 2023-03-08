import LoginFormStyled from "./loginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className="login">
      <div className="login__header">
        <h3>Sign In to your DroneZone.</h3>
      </div>
      <form className="login__form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
      <h2 className="login__message">Don't have an account? Sign Up.</h2>
    </LoginFormStyled>
  );
};
export default LoginForm;
