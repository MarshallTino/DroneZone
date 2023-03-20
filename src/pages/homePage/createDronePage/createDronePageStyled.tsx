import styled from "styled-components";

const CreateDronePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  .profile-page__title-container {
    background-color: ${(props) => props.theme.colors.mainDark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;
    height: 69px;
    border-radius: 5px;
  }
  .profile-page__title {
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
export default CreateDronePageStyled;
