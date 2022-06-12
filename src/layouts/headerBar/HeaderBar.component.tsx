import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import fullLogo from '../../assets/images/fullLogo.svg';
import { ButtonComponent } from '../../components/button/Button.component';
import './HeaderBar.component.scss';
import { useUserContext } from '../../context/user.context';
import { BurgerMenuComponent } from './burgerMenu/BurgerMenu.component';
import { FC } from 'react';
import { User } from '../../models/User';
import { BurgerMenuContainer } from './burgerMenu/BurgerMenu.container';

const messages = defineMessages(
  {
    headerBar_searchBar: {
      defaultMessage: 'Search',
      id: 'headerBar.searchBar',
    },
    headerBar_logIn: {
      defaultMessage: 'Log In',
      id: 'headerBar.logIn',
    },
    headerBar_signUp: {
      defaultMessage: 'Sign Up',
      id: 'headerBar.signUp',
    },
    headerBar_urlLogIn: {
      defaultMessage: 'login',
      id: 'headerBar.urlLogIn',
    },
    headerBar_urlSignUp: {
      defaultMessage: 'signup',
      id: 'headerBar.urlSignUp',
    },
    headerBar_logOut: {
      defaultMessage: 'Log Out',
      id: 'headerBar.logOut',
    },
  },
);

interface HeaderBarComponentProps {
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
  isAuthenticated: boolean;
  currentUser: User | undefined;
  logOut: () => void;
}

export const HeaderBarComponent: FC<HeaderBarComponentProps> = ({
  formatMessage,
  isAuthenticated,
  currentUser,
  logOut,
}) => (
  <div className="header-bar">
    <div className="header-bar__left">
      <BurgerMenuContainer />
      <img src={fullLogo} alt="Full Logo" className="header-bar__left__logo" />
    </div>
    <div className="header-bar__right">
      {!isAuthenticated && (
        <>
          <Link to={formatMessage(messages.headerBar_urlLogIn)}>
            <ButtonComponent type="button" designType="empty" onClick={() => {}}>
              {formatMessage(messages.headerBar_logIn)}
            </ButtonComponent>
          </Link>
          <Link to={formatMessage(messages.headerBar_urlSignUp)}>
            <ButtonComponent type="button" designType="full" onClick={() => {}}>
              {formatMessage(messages.headerBar_signUp)}
            </ButtonComponent>
          </Link>
        </>
      )}
      {isAuthenticated && (
        <>
          <div className="header-bar__right__account">
            {currentUser?.username}
          </div>
          <ButtonComponent type="button" designType="full" onClick={logOut}>
            {formatMessage(messages.headerBar_logOut)}
          </ButtonComponent>
        </>
      )}
    </div>
  </div>
);
