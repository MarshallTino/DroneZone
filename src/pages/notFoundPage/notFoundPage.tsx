import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./notFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <NotFoundPageStyled>
      <div className="notFoundPage">
        <h2 className="notFoundPage__number">404</h2>
        <h2 className="notFoundPage__text">Page not found...</h2>
      </div>
      <Button
        className={"notFoundPage__button"}
        text={"Back To Home Page"}
        disabled={false}
        action={() => navigate("/")}
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
