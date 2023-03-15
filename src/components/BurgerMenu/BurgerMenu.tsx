import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import BurgerStyled from "./BurgerMenu.Styled";

const BurgerMenu = (): JSX.Element => {
  const { logoutUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <BurgerStyled>
      <Menu
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <div className="menu-header">
          <h2 className="menu-header__title">DroneZone</h2>
        </div>
        <Link className="menu-item" to={"/"} onClick={closeMenu}>
          Explore Schemas
        </Link>
        <Link className="menu-item" to={"/"} onClick={closeMenu}>
          Create a Schema
        </Link>
        <Link className="menu-item" to={"/myProfile"} onClick={closeMenu}>
          My Profile
        </Link>
        <Button
          text={"Sign Out"}
          className="menu-header__signout button"
          disabled={false}
          action={() => logoutUser()}
        />
      </Menu>
    </BurgerStyled>
  );
};

export default BurgerMenu;
