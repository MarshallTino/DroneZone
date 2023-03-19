import styled from "styled-components";

const CreateFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;

  .form__submit-button {
    width: 100%;
    background-color: ${(props) => props.theme.colors.base};
    color: ${(props) => props.theme.colors.mainLight};
    padding: 15px;
    font-weight: 700;
    font-size: 25px;
    border-radius: 8px;
  }
`;

export default CreateFormStyled;
