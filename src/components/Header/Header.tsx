import BurgerMenu from "../BurgerMenu/BurgerMenu";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <BurgerMenu />
      <div className="header__title-container">
        <h2 className="header__title">DroneZone</h2>
      </div>
    </HeaderStyled>
  );
};
export default Header;
