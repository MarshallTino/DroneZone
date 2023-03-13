import { Oval } from "react-loader-spinner";
import LoaderStyled from "./LoaderStyled";
const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <Oval
        height={80}
        width={80}
        color="#DDC916"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ffff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderStyled>
  );
};

export default Loader;
