import { FC } from 'react';
import './Input.component.scss';

type InputType = 'search' | 'email' | 'password' | 'text';
type InputSize = 'small' | 'medium' | 'large';

export interface InputPros {
    type: InputType;
    inputsize: InputSize;
    placeholder: string;
    name: string
}

export const InputComponent: FC<InputPros> = ({
  type, placeholder, inputsize, name,
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
    />
  );
};
