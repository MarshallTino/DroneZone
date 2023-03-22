import styled from "styled-components";

const CreateFormInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.mainDark};
  border-radius: 5px;
  align-items: center;
  padding: 12px;
  gap: 15px;

  input[type="file"] {
    visibility: hidden;
  }

  .input-container {
    &__title {
      color: ${(props) => props.theme.colors.mainDark};
      padding: 5px;
      background-color: ${(props) => props.theme.colors.base};
      width: 100%;
      text-align: center;
      border-radius: 8px;
    }

    &__label {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      border: 2px solid ${(props) => props.theme.colors.base};
      border-radius: 4px;
      padding: 10px;
      color: ${(props) => props.theme.colors.mainLight};
      white-space: nowrap;
    }

    &__input {
      height: 100%;
      width: 60%;
      border: 0px solid;
      background-color: ${(props) => props.theme.colors.mainDark};
      color: ${(props) => props.theme.colors.mainLight};
      text-align: end;
    }
  }
  .input__icon {
    width: min-content;
    fill: ${(props) => props.theme.colors.mainLight};
  }

  .input__icon path {
    min-width: 26px;
  }
`;

export default CreateFormInputStyled;
