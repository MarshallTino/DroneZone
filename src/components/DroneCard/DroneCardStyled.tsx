import styled from "styled-components";

const DroneCardStyled = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.mainDark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 360px;
  height: 100%;
  border-radius: 5px;
  gap: 20px;

  .drone-card {
    &__image {
      width: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  .properties {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    border: solid 2px ${(props) => props.theme.colors.base};
    border-radius: 5px;
    &__container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__title {
      font-weight: 500;
      font-size: 16px;
      color: ${(props) => props.theme.colors.mainLight};
    }

    &__value {
      font-weight: 600;
      font-size: 15px;
      color: ${(props) => props.theme.colors.base};
    }
  }

  .creator {
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &__title {
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => props.theme.colors.mainLight};
    }

    &__name {
      margin-left: 5px;
      font-weight: 600;
      font-size: 16px;
      color: ${(props) => props.theme.colors.base};
    }
  }
`;

export default DroneCardStyled;
