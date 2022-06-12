import { useIntl } from 'react-intl';
import { useState } from 'react';
import { BurgerMenuComponent } from './BurgerMenu.component';

export const BurgerMenuContainer = () => {
  const { formatMessage } = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const openBurgerMenu = () => {
    setIsOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsOpen(false);
  };

  return (
    <BurgerMenuComponent
      isOpen={isOpen}
      openBurgerMenu={openBurgerMenu}
      closeBurgerMenu={closeBurgerMenu}
      formatMessage={formatMessage}
    />
  );
};
