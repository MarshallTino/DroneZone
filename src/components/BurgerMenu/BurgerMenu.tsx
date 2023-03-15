import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import BurgerStyled from "./BurgerMenu.Styled";

const BurgerMenu = (): JSX.Element => {
  return (
    <BurgerStyled>
      <Menu>
        <div className="menu-header">
          <h2 className="menu-header__title">DroneZone</h2>
        </div>
        <Link className="menu-item" to={"/"}>
          Explore Schemas
        </Link>
        <Link className="menu-item" to={"/"}>
          Create a Schema
        </Link>
        <Link className="menu-item" to={"/myProfile"}>
          My Profile
        </Link>
        <Button
          text={"Sign Out"}
          className="menu-header__signout button"
          disabled={false}
        />
      </Menu>
    </BurgerStyled>
  );
};

export default BurgerMenu;
