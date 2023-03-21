import styled from "styled-components";

const DetailDroneInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.mainDark};
  height: 100%;
  border-radius: 5px;
  .drone-info {
    &__title-container {
      background-color: ${(props) => props.theme.colors.mainDark};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px 15px;
      height: 69px;
      border-radius: 5px;
      width: 100%;
      margin-bottom: 10px;
    }
    &__title {
      padding-top: 15px;
      color: ${(props) => props.theme.colors.mainLight};
      font-size: 28px;
      height: 100%;
      width: 100%;
      font-weight: 500;
      position: relative;
      text-align: center;
      border-bottom: 3px solid ${(props) => props.theme.colors.base};
    }
    &__category-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      gap: 10px;
    }
    &__category {
      padding: 6px 16px;
      background-color: ${(props) => props.theme.colors.mainLight};
      border-radius: 8px;
      color: #0a0a93;
      font-weight: 600;
    }
  }

  .difficulty {
    background-color: orange;
    color: ${(props) => props.theme.colors.mainDark};
  }
  .droneClass {
    background-color: ${(props) => props.theme.colors.base};

    color: ${(props) => props.theme.colors.mainDark};
  }
`;

export default DetailDroneInfoStyled;
