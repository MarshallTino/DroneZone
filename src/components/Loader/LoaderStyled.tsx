import styled from "styled-components";

const LoaderStyled = styled.div`
  min-width: auto;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${(props) => props.theme.colors.mainDark};
  left: 0;
  right: 0;
  bottom: 0;
`;

export default LoaderStyled;
