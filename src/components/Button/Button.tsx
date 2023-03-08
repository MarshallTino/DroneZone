import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  text: string | number;
  action?: () => void;
  disabled: boolean;
}

const Button = ({
  className,
  text,
  action,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} className={className} disabled={disabled}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
