import './BurgerMenu.component.scss';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import burgerMenu from '../../../assets/images/burgerMenu.svg';
import arrow from '../../../assets/images/arrow.svg';
import { CategoriesMenuContainer } from './catagoriesMenu/CategoriesMenu.container';

const messages = defineMessages(
  {
    topNavBar_home: {
      defaultMessage: 'Home',
      id: 'topNavBar.home',
    },
    topNavBar_dashboard: {
      defaultMessage: 'Dashboard',
      id: 'topNavBar.dashboard',
    },
    topNavBar_createTopic: {
      defaultMessage: 'Create topic',
      id: 'topNavBar.createTopic',
    },
    topNavBar_settings: {
      defaultMessage: 'Settings',
      id: 'topNavBar.settings',
    },
    topNavBar_createTopicUrl: {
      defaultMessage: 'createtopic',
      id: 'topNavBar.createTopicUrl',
    },
    topNavBar_dashboardUrl: {
      defaultMessage: 'dashboard',
      id: 'topNavBar.dashboardUrl',
    },
    topNavBar_settingsUrl: {
      defaultMessage: 'settings',
      id: 'topNavBar.settingsUrl',
    },
  },
);

interface BurgerMenuComponentProps {
  isOpen: boolean;
  openBurgerMenu: () => void;
  closeBurgerMenu: () => void;
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
}

export const BurgerMenuComponent: FC<BurgerMenuComponentProps> = ({
  isOpen,
  openBurgerMenu,
  closeBurgerMenu,
  formatMessage,
}) => (
  <div>
    <button type="button" onClick={openBurgerMenu} className="burger-menu__button">
      <img src={burgerMenu} alt="Full Logo" />
    </button>
    {isOpen && (
    <div className="burger-menu__overlay">
      <div className="burger-menu__overlay__navigation">
        <Link to={formatMessage(messages.topNavBar_home).toLowerCase()}>
          {formatMessage(messages.topNavBar_home)}
        </Link>
        <CategoriesMenuContainer />
        <Link to={formatMessage(messages.topNavBar_dashboardUrl)}>
          {formatMessage(messages.topNavBar_dashboard)}
        </Link>
        <Link to={formatMessage(messages.topNavBar_createTopicUrl)}>
          {formatMessage(messages.topNavBar_createTopic)}
        </Link>
        <Link to={formatMessage(messages.topNavBar_settingsUrl)}>
          {formatMessage(messages.topNavBar_settings)}
        </Link>
      </div>
      <div className="burger-menu__overlay__arrow">
        <button type="button" onClick={closeBurgerMenu} className="burger-menu__overlay__arrow__button">
          <img src={arrow} alt="Full Logo" />
        </button>
      </div>
    </div>
    )}
  </div>
);
