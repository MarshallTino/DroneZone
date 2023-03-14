import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  background-color: ${(props) => props.theme.colors.mainDark};
  width: 100%;
  height: 100vh;
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

    font-size: 40px;
    &__text {
      font-size: 24px;
      color: ${(props) => props.theme.colors.mainLight};
    }
  }
`;

export default NotFoundPageStyled;
