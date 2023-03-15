import { Link } from "react-router-dom";
import NotFoundPageStyled from "./notFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <div className="notFoundPage">
        <h2 className="notFoundPage__number">404</h2>
        <h2 className="notFoundPage__text">Page not found...</h2>
      </div>
      <Link className="notFoundPage__link" to={"/"}>
        Back To HomePage
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
