import { FC } from 'react';
import './Input.component.scss';

type InputType = 'search' | 'email' | 'password' | 'text';
type InputSize = 'small' | 'medium' | 'large';

interface InputProps {
    type: InputType;
    inputsize: InputSize;
    placeholder?: string;
    name: string;
    defaultValue?: string;
}

export const InputComponent: FC<InputProps> = ({
  type, placeholder, inputsize, name, defaultValue,
}) => {
  let inputClassName = 'input';

  if (inputsize === 'small') {
    inputClassName += ' small';
  }
  if (inputsize === 'medium') {
    inputClassName += ' medium';
  }
  if (inputsize === 'large') {
    inputClassName += ' large';
  }

  return (
    <input
      className={inputClassName}
      name={name}
      type={type}
      placeholder={placeholder}
      data-inputsize={inputsize}
      defaultValue={defaultValue}
    />
  );
};

InputComponent.defaultProps = {
  placeholder: undefined,
  defaultValue: undefined,
};
