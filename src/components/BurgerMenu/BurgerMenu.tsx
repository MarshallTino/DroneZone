import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import BurgerStyled from "./BurgerMenu.Styled";

const BurgerMenu = (): JSX.Element => {
  const { logoutUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  const isLogged = useAppSelector((state) => state.user.isLogged);
  return (
    <BurgerStyled>
      <Menu
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        burgerButtonClassName={isLogged ? "burger-menu" : "burger-menu-hidden"}
      >
        <div className="menu-header">
          <h2 className="menu-header__title">DroneZone</h2>
        </div>
        <Link className="menu-item" to={"/"} onClick={closeMenu}>
          Explore Schemas
        </Link>
        <Link className="menu-item" to={"/createDrone"} onClick={closeMenu}>
          Create a Drone Schema
        </Link>
        <Link className="menu-item" to={"/myProfile"} onClick={closeMenu}>
          My Profile
        </Link>
        <Button
          text={"Sign Out"}
          className="menu-header__signout button"
          disabled={false}
          action={() => {
            closeMenu();
            logoutUser();
          }}
        />
      </Menu>
    </BurgerStyled>
  );
};

export default BurgerMenu;
