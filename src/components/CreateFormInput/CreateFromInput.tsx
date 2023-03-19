import { ReactNode } from "react";
import CreateFormInputStyled from "./CreateFormInputStyled";
type FormGroupInputProps = {
  name: string;
  children?: ReactNode[];
};

const FormGroupInputs = ({
  name,
  children,
}: FormGroupInputProps): JSX.Element => {
  return (
    <CreateFormInputStyled className="input-container">
      <h3 className="input-container__title">{name}</h3>

      {children}
    </CreateFormInputStyled>
  );
};

export default FormGroupInputs;

interface InputProps {
  label: string;
  name: string;

  onChange: any;
  type: string;
}

export const FormGroupInput = ({
  label,
  name,

  onChange,
  type,
}: InputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={name} className="input-container__label">
        {label}
        <input
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          className="input-container__input"
        />
      </label>
    </>
  );
};
