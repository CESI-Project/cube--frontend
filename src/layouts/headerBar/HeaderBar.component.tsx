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
  },
);

export const HeaderBarComponent = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="headerBar">
      <img src={fullLogo} alt="Full Logo" className="headerBar__logo" />
      <div className="headerBar__right">
        <img src={bellIcon} alt="Bell Icon" className="headerBar__right__icon" />
        <InputComponent type="search" placeholder={formatMessage(messages.headerBar_searchBar)} />
        <ButtonComponent type="button" designType="empty">
          {formatMessage(messages.headerBar_logIn)}
        </ButtonComponent>
        <ButtonComponent type="button" designType="full">
          {formatMessage(messages.headerBar_signUp)}
        </ButtonComponent>
      </div>
    </div>
  );
};
