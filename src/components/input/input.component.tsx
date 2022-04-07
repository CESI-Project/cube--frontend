import { FC } from 'react';
import './input.component.scss';

type InputType = 'search' | 'email' | 'password' | 'text';

export interface ButtonProps {
    type: InputType;
    placeholder: string,
}

export const InputComponent: FC<ButtonProps> = ({
  type, placeholder,
}) => (
  <input type={type} placeholder={placeholder} />
);
