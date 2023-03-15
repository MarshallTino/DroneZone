import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  background-color: ${(props) => props.theme.colors.mainDark};
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  gap: 15px;
  border-radius: 5px;

  .notFoundPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 58px;

    &__number {
      color: ${(props) => props.theme.colors.base};
      font-size: 40px;
    }

    &__text {
      font-size: 24px;
      color: ${(props) => props.theme.colors.mainLight};
    }
    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 260px;
      height: 40px;
      background-color: ${(props) => props.theme.colors.base};
      font-family: "Nunito sans";
      font-weight: 900;
      font-size: 20px;
      color: ${(props) => props.theme.colors.mainLight};
      border-radius: 8px;
    }
  }
`;

export default NotFoundPageStyled;
