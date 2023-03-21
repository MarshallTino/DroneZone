import styled from "styled-components";

const DroneComponentCardPropertyStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.colors.base};
  width: 100%;

  .info__name {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.mainLight};
  }

  .info__value {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.base};
  }
`;

export default DroneComponentCardPropertyStyled;
