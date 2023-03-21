import CreateForm from "../../components/CreateForm/CreateFrom";
import CreateDronePageStyled from "./createDronePageStyled";

const CreateDronePage = (): JSX.Element => {
  return (
    <CreateDronePageStyled>
      <div className="profile-page__title-container">
        <h2 className="profile-page__title">Create a Drone</h2>
      </div>
      <CreateForm />
    </CreateDronePageStyled>
  );
};

export default CreateDronePage;
