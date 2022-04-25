import { FC } from 'react';
import './input.component.scss';

type InputType = 'search' | 'email' | 'password' | 'text';
type InputSize = 'small' | 'medium' | 'large';

export interface InputPros {
    type: InputType;
    inputsize: InputSize;
    placeholder: string,
}

export const InputComponent: FC<InputPros> = ({
  type, placeholder, inputsize,
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
      type={type}
      placeholder={placeholder}
      data-inputsize={inputsize}
    />
  );
};
