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
    <label htmlFor={name} className="input-container__label">
      {label}
      {type === "file" ? (
        <>
          <input
            type={type}
            id={name}
            name={name}
            onChange={onChange}
            className="input-container__input file"
            required
          />
          <svg
            className="input__icon"
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
          >
            <path d="M18.167 32.167V21.833H7.833v-3.708h10.334V7.792h3.708v10.333h10.333v3.708H21.875v10.334Z" />
          </svg>
        </>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          className="input-container__input"
          required
        />
      )}
    </label>
  );
};
