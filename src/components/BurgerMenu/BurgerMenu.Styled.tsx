import styled from "styled-components";

const BurgerStyled = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: relative;
    width: 36px;
    height: 30px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${(props) => props.theme.colors.base};
    border-radius: 2px;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-cross-button {
    top: 25px !important;
    right: 25px !important;
    min-width: 40px;
    min-height: 40px;
  }
  .bm-burger-bars-hover {
    background: ${(props) => props.theme.colors.mainLight};
  }

  /* Position and sizing of clickable cross button */

  .menu-header__title {
    font-size: 39px;
    color: ${(props) => props.theme.colors.mainLight};
    margin-bottom: 5px;
    border-bottom: 2px solid ${(props) => props.theme.colors.base};
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${(props) => props.theme.colors.mainLight};
    min-height: 32px;
    min-width: 4px;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed !important;
    height: 100% !important;
    left: 0 !important;
    top: 0 !important;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${(props) => props.theme.colors.mainDark};
    font-size: 26px;
    height: 100% !important;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    max-height: 95%;
  }

  /* Individual item */
  .bm-item {
    font-size: 18px;
    color: ${(props) => props.theme.colors.base};
    margin: 20px;
  }

  /* Styling of overlay */
  .bm-overlay {
    top: 0;
    background: rgba(120, 116, 116, 0.3);
  }

  .menu-header__signout {
    width: 260px;
    color: ${(props) => props.theme.colors.mainDark};
    font-weight: 600;
  }
`;

export default BurgerStyled;
