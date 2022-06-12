import { FC, ReactNode } from 'react';
import './Button.component.scss';

type ButtonType = 'submit' | 'reset' | 'button';
type DesignType = 'empty' | 'full';

interface ButtonProps {
    type: ButtonType;
    designType: DesignType;
    children: ReactNode;
    onClick: () => void;
}

export const ButtonComponent: FC<ButtonProps> = ({
  children, type, designType, onClick,
}) => {
  let btnClassName = 'button';

  if (designType === 'empty') {
    btnClassName += ' empty-button';
  }
  if (designType === 'full') {
    btnClassName += ' full-button';
  }

  return (
  // eslint-disable-next-line react/button-has-type
    <button className={btnClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
