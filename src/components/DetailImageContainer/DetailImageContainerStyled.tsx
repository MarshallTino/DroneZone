import styled from "styled-components";

const DetailImageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 15px;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.mainDark};
  width: 100%;
  border-radius: 5px;

  .image-container__title-container {
    background-color: ${(props) => props.theme.colors.mainDark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    height: 69px;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;
  }
  .image-container__title {
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

  .image-container__image {
    border-radius: 5px;
    height: 100%;
    width: 100%;
  }
`;
export default DetailImageContainerStyled;
