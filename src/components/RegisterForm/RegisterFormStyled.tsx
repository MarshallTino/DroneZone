import styled from "styled-components";

const RegisterFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.colors.mainDark};
  padding: 20px;
  border-radius: 5px;
  .register {
    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 225px;
    }
    &__header {
      flex-direction: column;
      display: flex;
      align-items: center;
      width: 100%;
      color: ${(props) => props.theme.colors.mainLight};
      font-family: ${(props) => props.theme.fonts.primary};
      border-bottom: solid 2px ${(props) => props.theme.colors.base};
      padding: 10px;
    }
    &__header h3 {
      font-weight: 600;
      font-size: 38px;
      text-align: center;
      max-width: 14ch;
    }
    &__form input {
      font-family: ${(props) => props.theme.fonts.primary};
      background: #f2f2f2;
      width: 100%;
      padding: 11px;
      box-sizing: border-box;
      font-size: 16px;
      border-radius: 8px;
      font-weight: 800;
    }

    &__message {
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.mainLight};
      text-align: center;
      font-size: 16px;
      padding: 10px;
      font-weight: 400;
    }

    &__link {
      color: ${(props) => props.theme.colors.base};
    }
  }
`;
export default RegisterFormStyled;
