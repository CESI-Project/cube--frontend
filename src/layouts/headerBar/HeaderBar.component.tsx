import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import fullLogo from '../../assets/images/fullLogo.svg';
import bellIcon from '../../assets/images/bellIcon.svg';
import { ButtonComponent } from '../../components/button/button.component';
import './HeaderBar.component.scss';
import { InputComponent } from '../../components/input/input.component';

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
  },
);

export const HeaderBarComponent = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="headerBar">
      <img src={fullLogo} alt="Full Logo" className="headerBar__logo" />
      <div className="headerBar__right">
        <img src={bellIcon} alt="Bell Icon" className="headerBar__right__icon" />
        <InputComponent name="search-bar" type="search" placeholder={formatMessage(messages.headerBar_searchBar)} inputsize="small" />
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
      </div>
    </div>
  );
};
