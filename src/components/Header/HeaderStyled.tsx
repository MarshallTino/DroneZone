import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 72px;
  border: 3px solid ${(props) => props.theme.colors.base};
  background-color: ${(props) => props.theme.colors.mainDark};
  border-radius: 5px;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 10px;
  .header__title {
    color: ${(props) => props.theme.colors.mainLight};
  }

  .header__title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export default HeaderStyled;
