import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 100%;
  height: 40px;
  background-color: #ddc916;
  font-family: "Nunito sans";
  font-weight: 900;
  font-size: 20px;
  color: ${(props) => props.theme.colors.mainDark};
  border-radius: 8px;
`;
export default ButtonStyled;
