import { FC } from 'react';
import './button.component.scss';

type ButtonType = 'submit' | 'reset' | 'button';
type DesignType = 'empty' | 'full';

export interface ButtonProps {
    type: ButtonType;
    designType: DesignType;
}

export const ButtonComponent: FC<ButtonProps> = ({
  children, type, designType,
}) => {
  let btnClassName = 'button';

  if (designType === 'empty') {
    btnClassName += ' empty';
  }
  if (designType === 'full') {
    btnClassName += ' full';
  }

  return (
  // eslint-disable-next-line react/button-has-type
    <button className={btnClassName} type={type}>
      {children}
    </button>
  );
};
