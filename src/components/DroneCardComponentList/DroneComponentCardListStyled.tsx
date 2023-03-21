import styled from "styled-components";

const DroneComponentCardListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .componentCard-list__title-container {
    background-color: ${(props) => props.theme.colors.mainDark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;
    height: 69px;
    border-radius: 5px;
    width: 100%;
  }
  .componentCard-list__title {
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
`;

export default DroneComponentCardListStyled;
