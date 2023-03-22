import styled from "styled-components";

const DroneComponentCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 15px;
  gap: 15px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainDark};
  border-radius: 8px;

  .component-card {
    &__image {
      border-radius: 8px;
    }

    &__info {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .info__title {
    width: 100%;
    padding: 4px 12px;
    background-color: ${(props) => props.theme.colors.base};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.mainDark};
    text-align: center;
  }
`;
export default DroneComponentCardStyled;
